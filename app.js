var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var querystring = require('querystring'); 
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

Movie = require("./models/movie")

//Connect to MongoDB with Mongoose
mongoose.connect("mongodb://heroku_wr321rm2:bn0ftrqq6rpona7jq9bm37v19f@ds123181.mlab.com:23181/heroku_wr321rm2");
var db = mongoose.connection;

//HELLO WORLD
app.get("/", function(req, res){
	res.send("Hello World!");
});

//GET movies
app.get("/api/movies", function(req, res){
	Movie.getMovies(req.query, function(err, movies){
		res.json(movies);
	});
});

//GET movie
app.get("/api/movie/:_id", function(req, res){
	Movie.getMovieById(req.params._id, function(err, movie){
		res.json(movie);
	});
});

//POST movies
app.post("/api/movies", function(req, res){
	Movie.addMovie(req.body, function(err, movie){
		res.json(movie);
	});
});

//PUT movie updates
app.put("/api/movie/:_id", function(req, res){
	Movie.editMovieById(req.params._id, req.body, function(err, movie){
		res.json(movie);
	});
});

//DELETE movie
app.delete("/api/movie/:_id", function(req, res){
	Movie.deleteMovieById(req.params._id, function(err, movie){
		res.json({
        	message: "Movie successfully deleted",
        	id: req.params._id
    	});
	});
});

app.listen(process.env.PORT || 5000);
console.log("Running on port " + (process.env.PORT || 5000) + "...");