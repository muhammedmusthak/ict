// console.log(__filename);
// console.log(__dirname);
// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
// const fs = require('fs');
// fs.readdir('./',function(err,files){
    // if(err)console.log('error',err);
    // else console.log('result',files);

// });
// var fs = require('fs');
// fs.readFile('sampletext.txt','utf8',function(err,data){
    // if(err)throw err;
    // console.log(data);
// });
// var fs = require('fs');
// var data = fs.writeFilesync('dummyfile.txt','utf8');
// console.log(data);

// var fs = require('fs');
// fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    // if (err) throw err;
    // console.log('The file has been saved!');
//   });

var http = require('http');
http.createServer(function(req,res)
{
    res.write('hello world!');
    res.end();
}).listen(8080);
