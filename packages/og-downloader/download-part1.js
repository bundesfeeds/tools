const { DownloaderHelper } = require('node-downloader-helper');
const downloadDirName = __dirname + '/downloads'
const dl = new DownloaderHelper('https://media.offenegesetze.de/bgbl1.tar.bz2', downloadDirName);
dl.on('progress', (e)=> {
    console.log('rest', e.total - e.downloaded)
})
dl.on('end', () => console.log('Download Completed'))
dl.start();