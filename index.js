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

const it = (msg, fn) => describe('    '+msg, fn);

function adder (a, b){
    return a + b;
}

module.exports = {
    describe,
    expect,
    it,
    matchers,
}