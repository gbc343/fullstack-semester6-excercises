const fs = require('fs')
const csv = require('csv-parser')


var path = 'canada.txt'

var path2 = 'usa.txt '

if (fs.existsSync(path)) {
    try {
        fs.unlinkSync(path)
      } catch(err) {
        console.error(err)
      }}

      if (fs.existsSync(path2)) {
        try {
            fs.unlinkSync(path2)
          } catch(err) {
            console.error(err)
          }}


var results = [];
var results2 = [];

 fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (data) => {
    if (data['country'] === 'Canada') {
      results.push(data);
    }
  })
  .on('end', () => {
    console.log(results);
    const text = results.map(JSON.stringify).reduce((prev, next) => `${prev}\n${next}`);
    fs.writeFile("canada.txt",text, (err) => {
        if(err){
            console.log(`Write Error: ${err}`)
        }else{
            console.log("Write Success")
        }
    })
  });


  fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (data) => {
    if (data['country'] === 'United States') {
      results2.push(data);
    }
  })
  .on('end', () => {
    console.log(results2);
    const text = results2.map(JSON.stringify).reduce((prev, next) => `${prev}\n${next}`);
    fs.writeFile("usa.txt",text, (err) => {
        if(err){
            console.log(`Write Error: ${err}`)
        }else{
            console.log("Write Success")
        }
    })
  });


//https://www.npmjs.com/package/get-line
//https://tutorialedge.net/nodejs/reading-writing-files-with-nodejs/
//https://stackoverflow.com/questions/51307928/need-to-write-an-array-of-objects-to-a-file-from-nodejs
//https://stackoverflow.com/questions/60780414/how-can-i-get-specific-values-of-a-csv-and-add-them-to-a-json-with-csvparser

//removal stuff
//https://www.codegrepper.com/search.php?answer_removed=1&q=nodejs%20delete%20file%20if%20exists
//https://flaviocopes.com/how-to-remove-file-node/