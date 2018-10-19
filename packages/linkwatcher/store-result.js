
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "store-links"});

module.exports = function(db, url, links) {
    let insertFromUrl = db.get('INSERT OR IGNORE INTO urls (url) VALUES (?)', url);
    let promises = links.map(link => db.get('INSERT OR IGNORE INTO urls (url, datetime) VALUES (?, ?)', link, new Date().toISOString()));
    promises.push(insertFromUrl);
    return Promise.all(promises).then(results => {
        letSelectFromUrl = db.get('SELECT url, id FROM urls WHERE url = ?', url);
        let promises = links.map(link => db.get('SELECT url, id FROM urls WHERE url = ?', link));
        promises.push(letSelectFromUrl);
        return Promise.all(promises);
    }).then(results => {
       // pick from id
        let fromId = results.filter(urlResult => typeof urlResult !== 'undefined' && urlResult.url == url);


        if (fromId.length === 0 ) {
            log.warn('no fromId from', url)
            return Promise.reject('no fromId from'+ url)
        }

        fromId = fromId[0].id;
        log.info('mapping', url, 'as', fromId)
        
        let rest = results.filter(urlResult => urlResult.url != url);
        rest = rest.map(result => db.get('INSERT OR IGNORE INTO links (from_url_id, to_url_id) VALUES (?, ?)', fromId, result.id).catch(console.log));
        return Promise.all(rest);
    })
}