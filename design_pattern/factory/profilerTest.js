const profiler = require('./Profiler');

function getRandomArray(len) {
    const p = profiler('Generation a ' + len + ' items long array');
    p.start();
    const arr = [];
    for(let i = 0; i < len; i++) {
        arr.push(Math.random());
    }
    p.end();
}

getRandomArray(1e6);
console.log('Done');