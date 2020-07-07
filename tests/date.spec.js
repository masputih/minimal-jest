const timezonemock = require('timezone-mock');

describe('Date ',()=>{

    beforeAll(()=>{
        timezonemock.register('Australia/Adelaide');
    });
    test('Default date', ()=>{
        console.log(new Date().toLocaleString())
    })
})