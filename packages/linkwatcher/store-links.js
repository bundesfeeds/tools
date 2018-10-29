let data = require('@bundesfeeds/bundestag-daten/bt19.json');
const HCCrawler = require('headless-chrome-crawler');
let sqlite = require('sqlite');
let storeLinks = require('./store-result');
const shuffled = data.sort(() => .5 - Math.random());// shuffle  
let selected =shuffled.slice(0,3) ; //get sub-array of first n elements AFTER shuffle

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "store-links"});
log.info("hi");


var crawler
var db; 
let count = 0;

function initDb() {
    return sqlite.open('./bf2.sqlite3', { Promise })
}

// setTimeout(timeout => process.exit(1), 60000);

function initCrawler() {
    return HCCrawler.launch({
        maxConcurrency: 25,
        // Function to be evaluated in browsers
        evaluatePage: (() => ({})),
        onError: (err) => {
            log.error(err); 
        },
        onSuccess: (result => {
            // console.log(result)
            if (result.response.ok) {


                let storeUrl = result.response.url || result.options.url

                storeLinks(db, result.options.url, result.links).catch(log.error).then(stored => {
                    count++;
                    log.info('stored', result.options.url, result.links.length);
            
                });

            } 
        })
    })    
}



function processRandomTen() {
    const shuffled = data.sort(() => .5 - Math.random());// shuffle  
    let selected =shuffled.slice(0,3) ; //get sub-array of first n elements AFTER shuffle
    return selected.filter(row => {

        if (!row.websiteurl) {
            return false;
        }

        if (row.websiteurl.match('abgeordnetenwatch')) {
            return false;
        }
        
        return true
    });
}

Promise.all([initCrawler(), initDb()]).then(result => {
    [crawler, db] = result;
    var storedQueueSize;
    setInterval(()=>{
  
  
        function stats() {
            return Promise.all(
                [
                    crawler.queueSize(),
                    crawler.pendingQueueSize()
                ]
            ).then((res)=> {
                [queueSize, pendingQueueSize] = res;
                storedQueueSize = queueSize
                log.info('queue status', queueSize, pendingQueueSize)
            });
        }
     
        log.info('interval');   
        let bt = processRandomTen()
        .map(person => {
        log.info('add to queue', person);
        return crawler
            .queue({url: person.websiteurl, maxDepth: 1, followSitemapXml: true, timout: 10})
            .catch(log.error)
        });
        Promise.all(bt).then(res => stats());
    }, 20000);
}).catch(log.error)





/*
const db = sqlite.open('./bf.sqlite3', { Promise })
    .then(db => {
        return StoreLinks(db, url, links)
    }).then(console.log).catch(console.error)
*/

