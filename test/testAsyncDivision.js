var asyncDivision = require('../asyncDivision');

// 콜백 사용
asyncDivision(10, 2, (error, result) => {
    if (error) {
        return console.error(error);
    }
    console.log(result);
});
// Promise 사용
asyncDivision(22, 11)
    .then(result => console.log(result))
    .catch(error => console.log(error));