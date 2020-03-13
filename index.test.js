const {
    describe,
    expect,
    it,
    matchers,
    itAdd,
    itSub,
    itMult,
    itDiv
} = require('./index');

let executes = 0;
const noop = () => { executes += 1; }
describe('describe', ()=>{
    it('Executes a callback function', ()=>{
        const actual = describe(' ', noop)
        expect(executes).toBe(1);
    })
});
const add = (a, b)=>a+b;
executes = add(1, 2);
describe('describe: ', ()=>{
    itAdd("Adder", ()=>{
        const actual = describe(' ', add);
        expect(executes).toBe(3);
    })
})

function sub(a, b){
    return a - b;
}
executes = sub(2, 1);
describe('describe: ', ()=>{
    itAdd("Subtractor", ()=>{
        const actual = describe(' ', sub);
        expect(executes).toBe(1);
    })
})
function mult(a, b){
    return a*b;
}
executes = mult(1, 2);
describe('describe: ', ()=>{
    itAdd("Multiplier", ()=>{
        const actual = describe(' ', mult);
        expect(executes).toBe(2);
    })
})
function div(a, b){
    return a/b;
}
executes = div(1, 2);
describe('describe: ', ()=>{
    itAdd("Divider", ()=>{
        const actual = describe(' ', div);
        expect(executes).toBe(1/2);
    })
})