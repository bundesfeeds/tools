#!/usr/bin/env node
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const initdDb = require('../lib/init/db'); 
const initCrawler = require('../lib/init/crawler');

const init = [
  initdDb(process.env.DB_URI),
  initCrawler()
];

Promise.all(init)
  .then((res) => {
    console.log(res)
    console.log('Connection has been established successfully.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1)
  });