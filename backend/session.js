var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");
//Replace the link below by mLab link
var db = mongo.connect("mongodb://localhost:27017/Edunate", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ' + db, ' + ', response);
  }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var Schema = mongo.Schema;

var UsersSchema = new Schema({
  id: {
    type: String
      },
  topic:{
      type:String
  },
  locality:{
    type:String
  },
  tutorname:{
    type:String
},
  description:{
    type:String
},
  online:{
    type:String
},
  from_date:{
    type:String
},
  to_date:{
    type:String
},
seats:{
    type:Number
},
   time:{
    type:String
},
imageInput:{
  type:String
},

   
}, {
  versionKey: false
});


var model = mongo.model('users_session', UsersSchema, 'users_session');

app.post("/api/SaveUser", function (req, res) {
  var mod = new model(req.body);
  if (req.body.mode == "Save") {
    mod.save(function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          data: "Record has been Inserted..!!"
        });
      }
    });
  } 
})

app.post("/api/UpdateUser", function (req, res) {
  model.findByIdAndUpdate(req.body.id, {
    tutorname: req.body.tutorname,
    topic: req.body.topic,
    from_date: req.body.from_date,
    time: req.body.time,
    to_date:req.body.to_date,
    imageInput:req.body.imageInput,
    description:req.body.description,
    locality:req.body.locality,
    online:req.body.online,
    seats:req.body.seats
  },
  function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "Record has been Updated..!!"
      });
    }
  });
})
app.post("/api/deleteUser", function (req, res) {
  model.remove({
    _id: req.body.id
  }, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "Record has been Deleted..!!"
      });
    }
  });
})


app.get("/api/getUser", function (req, res) {
  model.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
})


app.listen(8082, function () {

  console.log('Example app listening on port 8082!')
})