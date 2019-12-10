const delayFunction = (() => {
  let timer = 0;

  return delay => {
    if (typeof delay !== 'number') return 'your paramet is not number:(';

    let now = Date.now();

    if (timer + delay < now) {
      timer = now;
      return 'called';
    }
  };
})();

module.exports = delayFunction;
