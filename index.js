const matchers = exp=>({
    toBe: (assertion)=>{
        if(exp === assertion){
            console.log('Pass');
            return true;
        }
        console.log('Fail');
        return false;
    }
});
const expect = value => matchers(value);
const describe = (desc, cb)=>{
    console.log(desc);
    cb();
}

const describeAdd = (desc, cb, a, b)=>{
    console.log(desc);
    cb(a, b);
}

const it = (msg, fn) => describe('    '+msg, fn);
const itAdd = (msg, fn, a, b) => describe('Adder'+msg, fn);
const itSub = (msg, fn, a, b) => describe('Subtractor'+msg, fn);
const itMult = (msg, fn, a, b) => describe('Multiplier'+msg, fn);
const itDiv = (msg, fn, a, b) => describe('Divider'+msg, fn);

module.exports = {
    describe,
    expect,
    it,
    matchers,
    itAdd,
    itSub,
    itMult,
    itDiv
}