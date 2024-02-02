// import fs from 'fs';
// import path from 'path';
const fs = require('fs');
const path = require('path');

var normalizedPath = __dirname;
var data = {}

fs.readdirSync(normalizedPath).forEach(function(file) {
  // console.log("File: ", file);
    if(file != 'index.js'){
      let fileData = require(path.join(__dirname, file));
      console.log("fileData: ", fileData);
      data[file.split('.')[0]] = fileData;
    }
});
console.log("Data: ", data);
console.log("Index.js file");

module.exports = data;