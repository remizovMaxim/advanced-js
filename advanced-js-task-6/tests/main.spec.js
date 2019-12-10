const getStrTime = require('../src/main');

// describe('11 Test function', () => {
//     it('Should be "your paramet is not number:("', () => {
//         expect(getStrTime('exclusive')).toEqual("your paramet is not number:(");
//     });
    
//     it('Should be "called"', () => {
//         expect(getStrTime(2000)).toEqual('called');
//         expect(getStrTime(2000)).toBeUndefined();
//     });
// });

describe('Test function getAtrTime', () => {
    it('Should be "your paramet is not number:("', () => {
        expect(getStrTime('exclusive')).toEqual("your paramet is not number:(");
    });
    
    it('Should be "called"', () => {
        let test1 = getStrTime(2000).split(' time: ');
        
        expect(test1[0]).toEqual('called');
        expect(getStrTime(2000)).toBeUndefined();
    });
});