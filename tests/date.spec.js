const timezonemock = require('timezone-mock');

describe('Date ',()=>{

    beforeAll(()=>{
        //timezonemock.register('Australia/Adelaide');
    });
    test('Default date', ()=>{
        expect(new Date().getTimezoneOffset()).toBe(-480); // singapore TZ
    })
})