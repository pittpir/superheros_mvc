let express = require('express');
let app = express();

const fs = require('fs');
let rawdata = fs.readFileSync('./superheros.json');  

let hero = JSON.parse(rawdata.toString());  
let string = hero.superheros;   //extract the array portion of the object as a string

var re = /^\[|\]|\'/g;
array = string.replace(re, '').split(", ");

//console.log(array);
//console.log(array[2]);

app.get("/superhero", (request,response) => {
	response.send(hero);
});

app.get("/superhero/:index", (request,response) => {

	if (request.params.index < array.length) {
		response.send(array[request.params.index]);
	} else {
		response.send("This index does not exist");
	}		
});

app.listen(3000);
