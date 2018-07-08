var mongoose = require("mongoose");

// Movie Schema
var movieSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	director:{
		type: String
	},
	cast:{
		type: [String]
	},
	year:{
		type: String
	},
	blurb:{
		type: String
	},
	posterImage:{
		type: String
	},
	stillImage:{
		type: String
	}
});
var Movie = module.exports = mongoose.model("Movie", movieSchema);

// Get Movies
module.exports.getMovies = function(query, callback){
	Movie.find(query, callback);
}

// Get Movie (by Id)
module.exports.getMovieById = function(id, callback){
	Movie.findById(id, callback);
}

// Add Movie
module.exports.addMovie = function(movie, callback){
	Movie.create(movie, callback);
}

// Get Movie (by Id)
module.exports.editMovieById = function(id, fields, callback){
	Movie.findByIdAndUpdate(id, fields, {new: true}, callback);
}

// Get Movie (by Id)
module.exports.deleteMovieById = function(id, callback){
	Movie.findByIdAndRemove(id, callback);
}