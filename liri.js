// code to grab data from keys.js
var keys = require('./keys.js');

// console.log(keys);

var myKeys = keys.twitterKeys;

// console.log(myKeys);

// variable to store the keys
var consumerKey = myKeys.consumer_key;
var consumerSecret = myKeys.consumer_secret;
var accessTokenKey = myKeys.access_token_key;
var accessTokenSecret = myKeys.access_token_secret;

console.log(consumerKey);
console.log(consumerSecret);
console.log(accessTokenKey);
console.log(accessTokenSecret);
