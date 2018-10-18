module.exports = function(db, url, links) {
    let insertFromUrl = db.get('INSERT OR IGNORE INTO urls (url) VALUES (?)', url);
    let promises = links.map(link => db.get('INSERT OR IGNORE INTO urls (url) VALUES (?)', link));
    promises.push(insertFromUrl);
    return Promise.all(promises).then(results => {
        letSelectFromUrl = db.get('SELECT url, id FROM urls WHERE url = ?', url);
        let promises = links.map(link => db.get('SELECT url, id FROM urls WHERE url = ?', link));
        promises.push(letSelectFromUrl);
        return Promise.all(promises);
    }).then(results => {
       // pick from id
        let fromId = results.filter(urlResult => urlResult.url == url)[0].id;
        let rest = results.filter(urlResult => urlResult.url != url);
        rest = rest.map(result => db.get('INSERT OR IGNORE INTO links (from_url_id, to_url_id) VALUES (?, ?)', fromId, result.id).catch(console.log));
        return Promise.all(rest);
    })
}