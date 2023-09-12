const fs = require('fs');

let readStream = fs.createReadStream('input.txt');
let writeStream = fs.createWriteStream('ouput.txt');

readStream.pipe(writeStream);


// pipe is used for getting data from one file to wite on another file'