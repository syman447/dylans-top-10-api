var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.json());

Movie = require("./models/movie")

//Connect to MongoDB with Mongoose
mongoose.connect("mongodb://localhost:27017/dylans-top-10-db");
var db = mongoose.connection;

//HELLO WORLD
app.get("/", function(req, res){
	res.send("Hello World!");
});

//GET movies
app.get("/api/movies", function(req, res){
	Movie.getMovies(function(err, movies){
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
	var movie = req.body;
	Movie.addMovie(movie, function(err, movie){
		res.json(movie);
	});
});

app.listen(8080);
console.log("Running on port 8080...");