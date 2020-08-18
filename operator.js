// Node.js 디자인 패턴
// 1.2.4 향상된 객체 리터럴

module.exports = {
  square (x) {    // function 사용하지 않음
    return x * x;
  },
  cube (x) {
    return x * x * x;
  },
  sayHello: function () {
    return 'Hello';
  }
};
