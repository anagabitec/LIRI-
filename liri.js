require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

//Functions 

// Get artist name
var getArtistNames = function (artist) {
    return artist.name;
};

