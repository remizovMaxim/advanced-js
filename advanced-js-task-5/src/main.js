const delayFunction = require('../src/script');

const delayFunction2 = (() => {
  let timer = 0;

  return delay => {
    if (typeof delay !== 'number' && delay !== undefined) return 'your paramet is not number:(';
    
    if (delay === undefined) delay = 0;
    
    let now = Date.now();

    delay = delay + 2000;

    if (timer + delay < now) {
      timer = now;

      return delayFunction(delay);
    }
  };
})();

module.exports = delayFunction2;
