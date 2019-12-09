const delayFunction2 = require('../src/main');

describe('Test function', () => {
    it('Should be "your paramet is not number:("', () => {
        expect(delayFunction2('exclusive')).toEqual("your paramet is not number:(");
    });
    
    it('Should be "called"', () => {
        expect(delayFunction2(2000)).toEqual('called');
        expect(delayFunction2(2000)).toBeUndefined();
    });
});