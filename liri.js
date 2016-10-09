
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

function spotifySong(userInput) {

};

function movieThis(userInput) {

};

function doWhatItSays(userInput) {

};

switch (userCommand){
	case 'my-tweets': getTweets();
	// console.log('case1 ' + userCommand); 
	break;

	case 'spotify-this-song': spotifySong();
	// console.log('case2 ' + userCommand);
	break;

	case 'movie-this': movieThis();
	// console.log('case3 ' + userCommand);
	break;

	case 'do-what-it-says': doWhatItSays();
	// console.log('case4 ' + userCommand);
	break;
}


