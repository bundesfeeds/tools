import { Client } from '../client';


var assert = require('assert');
describe('client', function() {
  it('does a simple request', (done)=>{
    const client  = new Client();
    client.parliament('hamburg', 'deputies').then(()=>{
      done();
    });
  })
  it('does a simple all request', (done)=>{
    const client  = new Client();
    client.allParliaments('hamburg', 'deputies').then(()=>{
      done();
    });
  })
  it('does a profile request', (done)=>{
    const client  = new Client();
    client.profile('Angela', 'Merkel').then(()=>{
      done();
    });
  })
});