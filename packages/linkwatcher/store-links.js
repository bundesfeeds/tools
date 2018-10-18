let data = require('@bundesfeeds/bundestag-daten/bt19.json');
const HCCrawler = require('headless-chrome-crawler');
let sqlite = require('sqlite');
let storeLinks = require('./store-result');
let url = 'http://foo.de/';
let links = ['http://bar.de', 'http./baz.de'];

function initDb() {
    return sqlite.open('./bf.sqlite3', { Promise })
}

function initCrawler() {
    return HCCrawler.launch({
        // Function to be evaluated in browsers
        evaluatePage: (() => ({})),
        onError: ( error => {} ),
        onSuccess: (result => {
            if (result.response.ok) {
                storeLinks(db, result.response.url, result.links).catch(console.error).then(stored => {
                    console.log(result.response.url, result.links.length);
                });

            } 
        })
    })    
}
var crawler
var db; 

Promise.all([initCrawler(), initDb()]).then(result => {
    let crawler = result[0];
    db = result[1];

    let bt = data
        .filter(row => {

            if (!row.websiteurl) {
                return false
            }

            if (row.websiteurl.match('abgeordnetenwatch')) {
                return false;
            }
            
          
            return true
        })
        .map(person => {
        if (!person.websiteurl) {
            return
        }

        crawler
            .queue({url: person.websiteurl, maxDepth: 1})
            .catch(console.log)
    });
}).catch(console.error)



/*
const db = sqlite.open('./bf.sqlite3', { Promise })
    .then(db => {
        return StoreLinks(db, url, links)
    }).then(console.log).catch(console.error)
*/

