// custom Promise 노출하기
module.exports = function asyncDivision (dividend, divisor, callback) {
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            const result = dividend / divisor;
            if(isNaN(result) || !Number.isFinite(result)) {
                const error = new Error('Invalid operands');
                if(callback) { callback(error); }
                return reject(error);
            }
            if(callback) { callback(null, result); }
            resolve(result);
        });
    });
};