const fs = require('fs');

const fileName = './test';

/*fs.readFile(fileName,(err,data)=>{
    if(err){
        console.error(err);
    }
    console.log(data);
});

const data = fs.readFileSync(fileName);
console.log(data.toString());*/

const outFileName = './test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data',data=>{
    console.log(data.toString());
})