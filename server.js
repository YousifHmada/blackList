require('./config/config');
var axios = require('axios');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Movie} = require('./models/movie');
var {Authenticated} = require('./db/middlewares/authenticated');


var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(express.static('dist'));



app.post('/users/login/fb', (req, res)=>{
    User.fbRegisterOrLogin(req.body.fbAccessToken)
    .then((user)=>{
        res.status(200).send({
          _id:user._id,
          name:user.name,
          picture:user.picture,
          authAccessToken:user.tokens[user.tokens.length - 1].token
        });
    })
    .catch((e)=>{
        res.status(400).send();
    });
});

app.get('/users/:id/profile', (req, res)=>{
  User.findById(req.params.id)
    .then((user)=>{
        if(!user){
          res.status(400).send();
        }
        res.status(200).send({
          _id:user._id,
          name:user.name,
          picture:user.picture,
          listWateched:user.listWateched
        });
    })
    .catch((e)=>{
        res.status(400).send();
    });
});

app.post('/users/movies/:tmdbId/save', Authenticated, (req, res)=>{
  req.user.saveMovieToWatch(req.params.tmdbId,Movie)
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch((e)=>{
        res.status(400).send();
    });
});

app.post('/users/movies/:tmdbId/watch', Authenticated, (req, res)=>{
  req.user.watchMovie(req.params.tmdbId,req.body.review,req.body.rate,Movie)
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch((e)=>{
        res.status(400).send();
    });
});

app.get('/movies/api/:tmdbId', (req, res)=>{
    Movie.findByTmdbId(req.params.tmdbId)
    .then((movie)=>{
        res.status(200).send(movie);
    })
    .catch((e)=>{
        res.status(400).send();
    });
});

app.get('/movies/:id', (req, res)=>{
    Movie.findById(req.params.id)
    .then((movie)=>{
        if(!movie){
          return Promise.reject('no movie found');
        }
        res.status(200).send(movie);
    })
    .catch((e)=>{
        res.status(400).send();
    });
});


app.get('/users', (req, res)=>{
  User.find({}).then((data)=>res.send(data)).catch((e)=>res.send(e));
});

app.get('/users/r', (req, res)=>{
  User.remove({}).then((data)=>res.send(data)).catch((e)=>res.send(e));
});

app.get('/movies', (req, res)=>{
  Movie.find({}).then((data)=>res.send(data)).catch((e)=>res.send(e));
});

app.get('/delete', (req, res)=>{
  Movie.remove({}).then((data)=>res.send(data)).catch((e)=>res.send(e));
});

app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/dist/index.html');
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
