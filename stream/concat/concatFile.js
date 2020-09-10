// 입력으로 받은 일련의 파일을 연결하여 공급된 순서를 따르도록 하는 함수
const fromArray = require('from2-array');
const through = require('through2');
const fs = require('fs');

function concatFiles(destination, files, callback) {
    const destStream = fs.createWriteStream(destination);
    fromArray.obj(files)
        .pipe(through.obj((file, enc, done) => {
            const src = fs.createReadStream(file);
            src.pipe(destStream, { end: false });
            src.on('end', done);
        }))
        .on('finish', () => {
            destStream.end();
            callback();
        });
}
module.exports = concatFiles;