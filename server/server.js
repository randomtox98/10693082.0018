import express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware';
import {
  MongoClient,
  ObjectID
} from 'mongodb';

import bodyParser from 'body-parser';

import {
  SERVER,
  PORT,
  HTTP_SERVER_PORT,
  HTTP_SERVER_PORT_IMAGES,
  IMAGES
} from './constants';


const app = express();
app.use(express.static(__dirname + '/../static'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(corsPrefetch);

let statuses = {"200":{message: `Success`},
                "500":{message: `Internal Server Error`}}

let db; // global variable for getting an access to the database
MongoClient.connect('mongodb://' + SERVER)
  .then(connection => {
    db = connection.db('dbCities');
    app.listen(PORT, () => console.log('Server Listening on Port 9090'));
  })
  .catch(error => console.log('ERROR:', error));

app.post('/images', imagesUpload(
  './static/' + IMAGES,
  HTTP_SERVER_PORT_IMAGES
));

//routes
//
//
app.route('/api/cities')
  .get((req, res) => {
    db.collection('cities').find().toArray()
      .then(cities => res.json(cities))
      .catch(error => {
        res.status(500).json(statuses["500"]);
      });
  })
  .post( (req, res) => {
    db.collection('cities').insertOne(req.body, (error, result) => {
      if (error)
        res.status(500).json(statuses["500"]);
      else
        res.status(200).json(statuses["200"]);
    });
  })
//activities
//
//
app.route('/api/activities')
  .get((req, res) => {
    db.collection('activities').find().toArray()
      .then(cities => res.json(cities))
      .catch(error => {
        res.status(500).json(statuses["500"]);
      });
  })
  .post((req, res) => {
    db.collection('activities').insertOne(req.body)
    .then(res.status(200).json(statuses["200"]))
    .catch(error => {
      res.status(500).json(statuses["500"]);
    });
    db.collection('cities').updateOne({_id: ObjectID(req.body.cityId)}, {$push: {activities: req.body}})
    .then(res.status(200).json(statuses["200"]))
    .catch(error => {
      res.status(500).json(statuses["500"]);
    });
  });
//getting single entries
//
//
app.get('/api/city/:id', (req, res) => {
  db.collection('cities').findOne({
    '_id': ObjectID(req.params.id)
  }, function(error, result) {
    if (error)
      res.status(500).json({
        message: `Internal Server Error : ${error}`
      });
    else if (result)
      res.send(result);
    else
      res.status(404);
  })
})
app.get('/api/activity/:id', (req, res) => {
  db.collection('activities').findOne({
    '_id': ObjectID(req.params.id)
  }, function(error, result) {
    if (error)
      res.status(500).json({
        message: `Internal Server Error : ${error}`
      });
    else if (result)
      res.send(result);
    else
      res.status(404);
  });
})
//comments
//
// parentId needed!!
app.post('/api/comments', (req, res) => {
  const update = {
    comments: {
      user: {
        _id: ObjectID(req.body.userId),
        email: req.body.email
      },
      date: new Date(),
      text: req.body.text
    }
  }
  if(req.body.type === undefined)
    res.status(500).json(statuses["500"]);
  db.collection(req.body.type).updateOne({
    _id: ObjectID(req.body.parentId)
  }, {
    $push: update
  }).then(res.status(200).json(statuses["200"]))
      .catch(error => {
        res.status(500).json(statuses["500"]);
      });
  })
