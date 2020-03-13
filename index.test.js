const {
    describe,
    expect,
    it,
    matchers
} = require('./index');

let executes = 0;
const noop = () => { executes += 1; }
describe('describe', ()=>{
    it('Executes a callback function', ()=>{
        const actual = describe(' ', noop)
        expect(executes).toBe(1);
    })
});