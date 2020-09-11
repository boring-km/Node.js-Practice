const ticker = require('./ticker');

ticker.on('tick', tickCount => console.log(tickCount, 'TICK'));