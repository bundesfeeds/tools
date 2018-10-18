const HCCrawler = require('headless-chrome-crawler');
const bundestag = require('../bt19.json');
 

const fs = require('fs');

(async () => {
  const crawler = await HCCrawler.launch({
    // Function to be evaluated in browsers
    evaluatePage: (() => ({
      title: $('title').text(),
    })),
    onError: ( error => {

    } ),
    // Function to be called with evaluated results from browsers
    onSuccess: (result => {

        if (!result.response.ok) {
            console.log(result.response.url);
            
            fs.appendFile('errors.txt', result.response.url + '\n', function (err) {
                if (err) throw err;
                console.log('saved');
            });            
        } 

    }),
  });
  

  let bt = bundestag.map(person => 
        {
            if (!person.websiteurl) {
                return
            }

            crawler
                .queue({url: person.websiteurl, maxDepth: 1})
                .catch(console.log)
        });
    Promise.all(bt).then((errs, vals) => {
        console.log(vals)
    }).catch(console.log)




  await crawler.onIdle(); // Resolved when no queue is left
  await crawler.close(); // Close the crawler
})();