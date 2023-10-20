
const fs = require('fs');
const path = require('path');

function listFilesRecursively(directoryPath) {
  const filesAndDirs = fs.readdirSync(directoryPath);

  filesAndDirs.forEach((item) => {
    const itemPath = path.join(directoryPath, item);

    if (fs.statSync(itemPath).isDirectory()) {
      listFilesRecursively(itemPath);
    } else {
      console.log(itemPath);
    }
  });
}

const directoryToStart = 'your-directory-path';
listFilesRecursively(directoryToStart);
