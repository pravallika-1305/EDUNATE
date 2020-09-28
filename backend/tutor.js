var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");
const { encrypt, decrypt } = require('./crypto');
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
  fullname: {
    type: String
  },
  username: {
    type: String,
    unique:true
  },
  imageInput: {
    type: String
  },
  password: {
    type: String
  },
  twitter: {
    type: String
  },
  linkedin: {
    type: String
  },
  blog: {
    type: String
  },
  email: {
    type: String
  },
}, {
  versionKey: false
});


var model = mongo.model('users_tutor', UsersSchema, 'users_tutor');

app.post("/api/SaveUser", function (req, res) {
  var mod = new model(req.body);
  model.findOne({email:req.body.email}, function (err, data) {
    if (err) {
      res.send({
        data: "Username already exists"
      });
    }
    else if (data){
      res.send({
        data: "You have already registered."
      });
    } else {
      mod.save(function (err, data) {
        if (err) {
          res.send({
            data: "Username already exists"
          });
        } else {
          res.send({
            data: "Registered successfully!"
          });
        }
      });
    }
  });
})
app.post("/api/UpdateUser", function (req, res) {
  model.findByIdAndUpdate(req.body.id, {
    fullname: req.body.fullname,
    username: req.body.username,
    imageInput:req.body.imageInput,
    email:req.body.email,
    password: req.body.password,
    twitter: req.body.twitter,
    linkedin: req.body.linkedin,
    blog: req.body.blog
  },
  function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "Your profile has been updated!"
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


app.listen(8080, function () {

  console.log('Example app listening on port 8080!')
})
