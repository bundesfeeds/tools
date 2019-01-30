const HCCrawler = require('headless-chrome-crawler');
module.exports = ()=> {
    return HCCrawler.launch({
        maxConcurrency: 25,
    })   
}
 