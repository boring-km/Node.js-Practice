const fs = require('fs');

fs.writeFile('file.txt', 'Hello!', () => {
    fs.readFile('file.txt', {encoding: 'utf8'}, (err, res) => {
        console.log(res);
    });
});

/// missing.txt 파일을 읽으려고 시도
fs.readFile('missing.txt', {encoding: 'utf8'}, (err, res) => {
    console.log(err);
});