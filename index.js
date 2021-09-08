// Imports / Required modules:
const parse = require('csv-parse');
const fs = require('fs');

//Defining our variables:
const results = [];

//Reading the file: 
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data)=> {
   results.push(data); 
    })
    .on('error', (err)=> {
        console.log(err);
    })
    .on('end', ()=> {
        console.log(results);
        console.log("We're done with parsing the CSV file.")
    });


// parse();