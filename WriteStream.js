const fs = require('fs');

let data = "I love coding"

let writeStream = fs.createWriteStream('ouput.txt');

writeStream.write(data, 'utf-8');

writeStream.end();
writeStream.on('finish', function(){
    console.log('writting completed');
})