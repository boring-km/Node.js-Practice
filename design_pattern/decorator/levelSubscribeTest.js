const level = require('level');
const levelSubscribe = require('./levelSubscribe');

let db = level(__dirname + '/db', { valueEncoding: 'json' });
db = levelSubscribe(db);

db.subscribe(   // levelSubscribe에서 추가한 subscribe()
    { doctype: 'tweet', language: 'en' },
    (k, val) => console.log(val)    // levelSubscribe의 listener로 동작하는 함수
);
db.put('1', { doctype: 'tweet', text: 'Hi', language: 'en' });
db.put('2', { doctype: 'company', name: 'ACME Co.' });