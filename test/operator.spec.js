// Mocha 테스트 라이브러리 연습

const sayHello = require('../operator.js').sayHello;

describe('App Test!', function() {
  it('sayHello shoud return Hello', function (done) {
    if (sayHello() === 'Hello') {
      done();
    }
  })
});
