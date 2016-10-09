// code to grab data from keys.js
var keys = require('./keys.js');

// console.log(keys);

// variable to store the twitter keys
var myKeys = keys.twitterKeys;

// console.log(myKeys);

// variables to store the individual twitter keys
var consumerKey = myKeys.consumer_key;
var consumerSecret = myKeys.consumer_secret;
var accessTokenKey = myKeys.access_token_key;
var accessTokenSecret = myKeys.access_token_secret;

// console.log(consumerKey);
// console.log(consumerSecret);
// console.log(accessTokenKey);
// console.log(accessTokenSecret);

var userCommand = process.argv[2];

console.log(userCommand);

switch (userCommand){
	case 'my-tweets': console.log('case1 ' + userCommand);
	break;

	case 'spotify-this-song': console.log('case2 ' + userCommand);
	break;

	case 'movie-this': console.log('case3 ' + userCommand);
	break;

	case 'do-what-it-says': console.log('case4 ' + userCommand);
	break;
}
// if (process.argv[2] == 'my-tweets');