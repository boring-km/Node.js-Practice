module.exports = function levelSubscribe(db) {
    db.subscribe = (pattern, listener) => { // 객체 증강으로 새로운 메서드를 db 인스턴스에 추가함
        db.on('put', (key, val) => {    // put 연산 listen
            const match = Object.keys(pattern).every(
                k => (pattern[k] === val[k])
            );
            if (match) {
                listener(key, val);     // 패턴이 일치하는 key,val을 listener에 통보한다.
            }
        });
    };
    return db;
};