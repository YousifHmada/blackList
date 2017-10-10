const mongoose = require('mongoose');
//const Movie = require('./Movie');
var axios = require('axios');
var User = require('./user');
const _ = require('lodash');

// {
//   email: 'andrew@example.com',
//   password: 'adpsofijasdfmpoijwerew',
//   tokens: [{
//     access: 'auth',
//     token: 'poijasdpfoimasdpfjiweproijwer'
//   }]
// }

var MovieSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  tmdbId:{
    type: String,
    required: true
  },
  picture:{
    type: String
  },
  genres:[{
    name: {
      type: String,
      required: true
    } 
  }],
  vote_average:{
    type: Number,
    required: true
  },
  vote_count:{
    type: Number,
    required: true
  },
  release_date:{
    type: String
  },
  overview:{
    type: String
  },
  listSeen:[{
    user_id: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    review: {
      type : String,
      required: false
    },
    rate: {
      type : Number,
      required: false
    }
  }]
});


MovieSchema.statics.findByTmdbId = function(tmdbId){
  var Movie = this;
  return Movie.findOne({tmdbId})
            .then((movie)=>{
              if(!movie){
                return Movie.fetchFromTmdb(tmdbId);
                  // .then((data)=>{
                  //   var movie = new Movie();
                  //   movie.vote_average = data.vote_average;
                  //   movie.vote_count = data.vote_count;
                  //   movie.overview = data.overview;
                  //   movie.genres = _.map(data.genres, (current)=>{
                  //     return _.pick(current,['name'])
                  //   });
                  //   movie.release_date = data.release_date;
                  //   movie.picture= 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+data.poster_path;
                  //   movie.name= data.original_title;
                  //   movie.tmdbId = data.id;
                  //   console.log(movie);
                  //   return movie.save()
                  //     .then(d=>Promise.resolve(d))
                  //     .catch((e)=>Promise.reject(e))
                  // })
                  // .catch((e)=>Promise.reject(e))
              }else{
                return Promise.resolve(movie);
              }
            })
}


MovieSchema.statics.fetchFromTmdb = function(tmdbId){
  return axios.get('https://api.themoviedb.org/3/movie/'+tmdbId+'?api_key=feed0cd312ab707673bf5186ef09fd63&language=en-US')
          .then(data=>data.data);
}

MovieSchema.statics.searchInTmdb = function(query){
  return axios.get('https://api.themoviedb.org/3/search/multi?api_key=feed0cd312ab707673bf5186ef09fd63&language=en-US&query='+encodeURIComponent(query)+'&page=1&include_adult=false')
          .then(data=>data.data);
}


var Movie = mongoose.model('Movie', MovieSchema);

module.exports = {Movie}
