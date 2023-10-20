const fs = require('fs');

function readFileAsText(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      
      callback(err, null);
    } 
    else {
      callback(null, data);
    }
  });
}

