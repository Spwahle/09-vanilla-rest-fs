'use strict';

const debug = require('debug')('http:storage');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});



const storage = module.exports = {};



storage.create = function(schema, item) {
  debug('#create');
  // debugger
  return new Promise((resolve, reject) => {
    if(!schema) return reject(new Error('cannot create; schema required'));
    if(!item) return reject(new Error('cannot create; item required'));

    let json = JSON.stringify(item);

    return fs.writeFileProm(`${__dirname}/../data/${schema}/${item._id}.json`, json)
      .then(() => resolve(item))
      .catch(reject);
  });
};


storage.fetchOne = function(schema, itemId) {
  return new Promise((resolve, reject) => {
    console.log('here');
    if(!schema) return reject(new Error('cannot get item; schema required'));
    if(!itemId) return reject(new Error('cannon get item; itemId required'));
    return fs.readFileProm(`${__dirname}/../data/${schema}/${itemId}.json`)
      .then(buff => resolve(JSON.parse(buff.toString())))
      .catch(err => {
        // console.error(err);
        return reject(err);
      });
  });
};

storage.delete = function(schema, itemId) {
  return new Promise((resolve, reject) => {
    debug('#delete');
    if(!schema) return reject(new Error('cannot create; schema required'));
    if(!itemId) return reject(new Error('cannot create; item required'));

    if (itemId){

      fs.unlinkProm(`${__dirname}/../data/${schema}/${itemId}.json`)
        .then(() => {
          resolve(itemId);
        })
        .catch((err) => {
          return reject(err);
        });
    }
  });
};


storage.put = function(schema, item) {
  debug('#storage.update');
  return new Promise(function(resolve, reject) {
    if(!schema) return reject(new Error('cannot update; schema required'));
    if(!item) return reject(new Error('cannot update; item required'));

    let json = JSON.stringify(item);

    return fs.writeFileProm(`${__dirname}/../data/${schema}/${item._id}.json`, json)
      .then(() => resolve(json))
      .catch(console.error);
  });
};
