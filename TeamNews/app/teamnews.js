#!/usr/bin/env node

//request commandline arguement parser and http client.
let argv = require('yargs').argv;
let request = require('request');

//Make sure argument is a string.
if(typeof argv.for != "string"){
	console.log("Only string allowed");
	return;
}

//Hardcode team id to search for [arsenal or man united]. 
let team = (argv.for == 'Arsenal' || argv.for == 'arsenal' ) ? 57 : 66 ;

//http rquest options.
let options = {
	url: 'http://api.football-data.org/v1/teams/'+ team +'/players',
};

//Callback function, where http statusCode & error is checked and
//return data is parsed.
const callback = (error, response, body) => {
	if (error) console.log(error);
	if(!error && response.statusCode == 200){
		let data = JSON.parse(body);
		console.log(data.players);
	}
	
};

//The http request
request(options, callback);