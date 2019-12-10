const delayFunction = require('../src/script');

const getStrTime = (() => {
  let timer = 0;

  return delay => {
    if (typeof delay !== 'number' && delay !== undefined) return 'your paramet is not number:(';
    
    if (delay === undefined) delay = 0;
    
    let now = Date.now();

    delay = delay + 500;

    if (timer + delay < now) {
      timer = now;

      return delayFunction(delay) + ' time: ' + now;
    }
  };
})();

module.exports = getStrTime;
