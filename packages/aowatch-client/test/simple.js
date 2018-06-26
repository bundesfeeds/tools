import { Client } from '../client';
import "isomorphic-fetch"

var assert = require('assert');
describe('client', function() {
  it('does a simple request', (done)=>{
    const client  = new Client();
    client.parliament('hamburg', 'deputies').then((res)=>{
      done();
    });
  })

  it('does a constituencies request', (done)=>{
    const client  = new Client();
    client.parliament('hamburg', 'constituencies').then((res)=>{
      done();
    });
  })

  it('does a subset', (done)=>{
    const client  = new Client();
    client.subset('hamburg', 'deputies', 'votes').then((res)=>{
      done();
    });
  })
  
  it('does a simple all request', (done)=>{
    const client  = new Client();
    client.allParliaments('hamburg', 'deputies').then((res)=>{
      done();
    });
  })
  it('does a profile request', (done)=>{
    const client  = new Client();
    client.profile('Angela', 'Merkel').then((res)=>{
      done();
    });
  })
});