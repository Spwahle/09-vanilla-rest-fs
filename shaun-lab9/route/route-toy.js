'use strict';

const debug = require('debug')('http:route-toy');
const Toy = require('../model/toy');
const storage = require('../lib/storage');
const response = require('../lib/response');

module.exports = function(router) {
  //Post
  router.post('/api/toy', (req, res) => {
    debug('/api/toy POST');
    if (!req.body.name || !req.body.desc){
      response.sendText(res, 400, `Bad Request, must have name and desc`);
      return;
    }
    try {
      let newToy = new Toy(req.body.name, req.body.desc);
      storage.create('toy', newToy)
        .then(toy => response.sendJson(res, 201, toy));
    } catch(e) {
      response.sendText(res, 400, `Bad Request: ${e.message}`);
    }
  });
  //GET
  router.get('/api/toy', (req, res) => {
    debug('/api/toy GET');
    if(req.url.query._id) {
      storage.fetchOne('toy', req.url.query._id)
        .then(toy => response.sendJson(res, 200, toy))
        .catch(err => {
          console.error(err);
          response.sendText(res, 400, `Bad Request, Couldn't find record`);

        });
      return;
    }
    response.sendText(res, 400, `Bad Request, couldn't find record`);
  });

  //DELETE
  router.delete('/api/toy', (req, res) => {
    debug('/api/toy DELETE');
    if(!req.url.query._id){
      response.sendText(res, 404, `Error, Improper format for DELETE`);
      return ;
    }
    storage.delete('toy', req.url.query._id)
      .then(toy => {
        response.sendText(res, 204, `Deleted Record + ${toy}`);
      })
      .catch(err => {
        console.error(err);
        response.sendText(res, 404, `Bad Request, couldn't find record`);
      });
    return;
  });
  //PUT
  router.put('/api/toy', (req, res) => {
    debug('/api/toy PUT');
    if(!req.url.query._id){
      response.sendText(res, 400, `Error, No ID exists`);
      return;
    }
    let updateToy = req.body;
    storage.put('toy', updateToy)
      .then(toy => response.sendJson(res, 204, toy))
      .catch(err => {
        console.error(err);
        response.sendText(res, 400, `bad request: ${err.message}`);
      });
  });
};
