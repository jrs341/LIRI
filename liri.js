
var userCommand = process.argv[2];
var userInput = process.argv[3];

// console.log(userCommand);
// console.log(userInput);

function getTweets() {
	// code to grab data from keys.js
	var keys = require('./keys.js');

	var Twit = require('./node_modules/twit');
	// console.log(keys.twitterKeys);
	var client = new Twit(keys.twitterKeys);
	// console.log(client);

	client.get('search/tweets',{q: 'JasonSinn1'},function(err, data, response) {
   	console.log(data);
	});
};

function spotifySong() {
	var SpotifyWebApi = require('./node_modules/spotify-web-api-node');
 
	var spotifyApi = new SpotifyWebApi();
	// console.log(userInput);
	if (userInput != undefined) {
		
		spotifyApi.searchTracks(userInput)

	  	.then(function(data) {

	    	console.log(data.body.tracks.items[0].artists[0].name);
	    	console.log(data.body.tracks.items[0].album.name);
	    	console.log(data.body.tracks.items[0].name);
	    	console.log(data.body.tracks.items[0].preview_url);
	  	}, 

	  	function(err) {

	    	console.error(err);
	  	});

  	} else {

  		userInput = 'The Sign';
  		spotifySong();
  	}
};

function movieThis() {
	var request = require('request');

	var queryUrl = 'http://www.omdbapi.com/?t=' + userInput +'&y=&plot=short&r=json';

	console.log(queryUrl);

	request(queryUrl, function(error, response, body){
		if (!error && response.statusCode == 200 && userInput != undefined) {
			var movieInfo = ['Title', 'Year', 'imdbRating', 'Country', 'Language', 'Plot', 'Actors'];

			for (var i = 0; i < movieInfo.length; i++) {
				console.log(JSON.parse(body)[movieInfo[i]]);
			}
			
		} else {
			userInput = 'Mr Nobody';
			movieThis();
		}
	});
};

function doWhatItSays() {

};

switch (userCommand){
	case 'my-tweets': getTweets();
	// console.log('case1 ' + userCommand); 
	break;

	case 'spotify-this-song': spotifySong();
	// console.log('case2 ' + userCommand);
	break;

	case 'movie-this': movieThis();
	console.log('case3 ' + userCommand);
	break;

	case 'do-what-it-says': doWhatItSays();
	// console.log('case4 ' + userCommand);
	break;
}


