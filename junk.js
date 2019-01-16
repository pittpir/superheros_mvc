let express = require('express');
let app = express();
//import foo from './superheros.json';
//const foo = require('./superheros.json');
//const obj = JSON.parse(foo);
//console.log(foo.superheros);

//console.log(foo);
//let hero = JSON.parse(foo);
//console.log(foo.superheros);
//cow = foo.superheros;

//console.log(cow[2]);
//buf = Buffer.from("{" + cow + "}");
//let hero = JSON.parse(buf);
//const buf = Buffer.from(cow).join('');
//buf.join('');
//console.log(buf);
//


//cow = JSON.parse('[1, 5, "false"]');
//console.log(cow);
//console.log(cow[2]);

//let moose = {"superheros": ['batman', 'superman', 'hulk'] }

const fs = require('fs');
let rawdata = fs.readFileSync('./superheros.json');  
console.log(rawdata);
let hero = JSON.parse(rawdata.toString());  
console.log(hero);  
let string = hero.superheros; 
//let array2 = array.split();
//let array3 = moose.superheros;


//cow = JSON.parse("'" + array + "'");


//console.log(typeof(array));
//console.log(array);
var re = /^\[|\]|\'/g;
array = string.replace(re, '').split(", ");
//console.log(array);
//let array2 = array.split(", ");

//console.log(array2.length);

//console.log(array2[1]);

console.log(array);
console.log(array[2]);



app.get("/superhero", (request,response) => {
	
	response.send(hero);
		
});

app.get("/superhero/:index", (request,response) => {
	
	if (array[request.params.index] === "superman")
	{
		response.send("Yes Yes!!!");
	} else {
		response.send("This index is not superman");
	}
	/*
	if (request.params.index < array.length) {
		response.send(array[request.params.index]);
	} else {
		response.send("This index does not exist");
	}
	*/
		
});

app.listen(3000);
