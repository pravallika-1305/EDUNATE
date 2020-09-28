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
  username: {
    type: String,
    unique:true
  },
  
  password: {
    type: String
  },
  imageInput: {
    type: String
  },
  email: {
    type: String
  },
  organization: {
    type: String
  },
}, {
  versionKey: false
});


var model = mongo.model('users_poc', UsersSchema, 'users_poc');

app.post("/api/SaveUser", function (req, res) {
  var mod = new model(req.body);
  model.findOne({email:req.body.email}, function (err, data) {
    if (err) {
      res.send({
        data: "Username already exists."
      });
    }
    else if (data){
      res.send({
        data: "You already have an account"
      });
    } else {
      mod.save(function (err, data) {
        if (err) {
          res.send({
            data: "Username already exists."
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
    username: req.body.username,
    email:req.body.email,
    password: req.body.password,
    imageInput:req.body.imageInput,
    organization:req.body.organization
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


app.listen(8081, function () {

  console.log('Example app listening on port 8081!')
})