const fs = require('fs');

let data = '';
let readStream = fs.createReadStream('input.txt');

readStream.on('data', function(chunk){
    // data +=chunk;
    data += chunk;
});
readStream.on('end', function(){
    console.log(data);
})

console.log(global);