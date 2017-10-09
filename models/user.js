const mongoose = require('mongoose');
//const Movie = require('./Movie');
var axios = require('axios');
var jwt = require('jsonwebtoken');
const Movie = require('./movie');
// {
//   email: 'andrew@example.com',
//   password: 'adpsofijasdfmpoijwerew',
//   tokens: [{
//     access: 'auth',
//     token: 'poijasdpfoimasdpfjiweproijwer'
//   }]
// }

var UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  fbid:{
    type: String,
    unique: true,
    required: true
  },
  picture:{
    type: String
  },
  listWateched:[{
    movie_id: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    },
    review: {
      type : String,
      required: false
    },
    rate: {
      type : Number,
      required: false
    }
  }],
  listToWatch: [{
    movie_id: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    },
  }],
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});


UserSchema.methods.watchMovie = function(tmdbId, review, rate, myMovie){
  var user = this;
  return myMovie.findByTmdbId(tmdbId)
    .then((movie)=>{
        user.listWateched.push({movie_id:movie._id,review,rate});
        movie.listSeen.push({user_id:user._id});
        return movie.save()
    }).then(data=>{
      return user.save().then(user=>Promise.resolve(user))
    });
}

UserSchema.methods.saveMovieToWatch = function(tmdbId, myMovie){
  var user = this;
  return myMovie.findByTmdbId(tmdbId)
    .then((movie)=>{
        user.listToWatch.push({movie_id:movie._id});
        return user.save().then(user=>Promise.resolve(user))
    });
}

UserSchema.statics.isAuthenticatedToken = function(authAccessToken){
  var User = this;
  var decoded;

  try{
    decoded = jwt.verify(authAccessToken,'helloUser');
  }catch(e){
    return Promise.reject('un authenticated');
  }


  return User.findOne({
    _id: decoded._id,
    'tokens.token': authAccessToken,
    'tokens.access': decoded.access
  }).then((user)=>user);

};

UserSchema.statics.fbRegisterOrLogin = function(fbAccessToken){
  var User = this;
  return User.getFacebookUserData(fbAccessToken)
    .then((data)=>{
        return User.findOne({fbid:data.id})
          .then((user)=>{
            if(!user){
                var user = new User();
                user.fbid = data.id;
                user.picture = data.picture.data.url;
                user.name = data.name;
                user.tokens.push({
                  access:'auth',
                  token: user.generateAccessToken()
                });
                return user.save();
            }
            user.picture = data.picture.data.url;
            user.fbid = data.id;
            user.name = data.name;
            user.tokens.push({
              access:'auth',
              token: user.generateAccessToken()
            });
            return user.save();
        });
    })
    .then((data)=>data);
}


UserSchema.methods.generateAccessToken = function(){
  var user = this;
  var token = jwt.sign({_id:user._id,access:'auth'},'helloUser');
  return token;
}

UserSchema.statics.getFacebookUserData = function (fbAccessToken){
  return axios.get('https://graph.facebook.com/me?fields=id,name,picture.width(300).height(300)&access_token='+encodeURIComponent(fbAccessToken)).then((data)=>data.data);;
}

var User = mongoose.model('User', UserSchema);

module.exports = {User}
