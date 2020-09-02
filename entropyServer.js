const Chance = require('chance');
const chance = new Chance();

require('http').createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}); // 응답 헤더 작성
    while(chance.bool({likelihood: 95})) {  // 5% 확률로 종료되는 루프 시작
        res.write(chance.string() + '\n');  // 임의의 문자열을 스트림에 작성
    }
    res.end('\nThe end...\n');              // 루프가 끝나면 스트림에서 end() 호출
    res.on('finish', () => console.log('All data was sent'));       // finish 이벤트에 대한 리스너 등록, 모든 데이터가 하위 소켓에 flush될 때 발생한다.
}).listen(3000, () => console.log('Listening on http://localhost:3000'));