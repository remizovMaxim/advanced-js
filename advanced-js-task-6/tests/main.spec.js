const getStrTime = require('../src/main');

describe('Test function', () => {
    it('Should be "your paramet is not number:("', () => {
        expect(getStrTime('exclusive')).toEqual("your paramet is not number:(");
    });
    
    it('Should be "called"', () => {
        expect(getStrTime(2000)).toEqual('called');
        expect(getStrTime(2000)).toBeUndefined();
    });
});