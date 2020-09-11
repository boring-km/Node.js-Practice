function createLoggingWritable(writalbeOrig) {
    const proto = Object.getPrototypeOf(writalbeOrig);

    function LoggingWritable(writableOrig) {
        this.writableOrig = writalbeOrig;
    }

    LoggingWritable.prototype = Object.create(proto);

    // 비동기 연산이 완료될 때마다 표준 출력에 메시지를 기록하도록 write()를 오버라이드 한다.
    LoggingWritable.prototype.write = function (chunk, encoding, callback) {
        if(!callback && typeof encoding === 'function') {
            callback = encoding;
            encoding = undefined;
        }

        console.log('Writing ', chunk);

        // writableOrig의 write() 반환값을 다시 LoggingWritable의 프로토타입 write로 지정
        return this.writableOrig.write(chunk, encoding, function () {
            console.log('Finished writing ', chunk);
            callback && callback(); // 위에서 encoding을 복사한 callback이 존재하면 callback() 실행
        });
    };

    LoggingWritable.prototype.on = function () {
        return this.writableOrig.on.apply(this.writableOrig, arguments);
    };

    LoggingWritable.prototype.end = function () {
        return this.writableOrig.end.apply(this.writableOrig, arguments);
    };

    return new LoggingWritable(writalbeOrig);   // 객체 대신 생성해주는 Factory
}

const fs = require('fs');

const writable = fs.createWriteStream('test.txt');
const writableProxy = createLoggingWritable(writable);
writableProxy.write('First chunk');
writableProxy.write('Second chunk');
writable.write('This is not logged');
writableProxy.end();