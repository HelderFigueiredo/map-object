var assert = require('./assert'),
    proto = require('./proto');

function A() {
    this.one = 1;
}

A.prototype = Object.create(Object.assign({}, proto(A)));

let a = new A();

a['two'] = 2;
a['three'] = 3;
a['four'] = 4;

let ab = a.map(v => v + 1);

console.log(assert(ab.one === 2, 'ab.one should be equal 2'));
console.log(assert(ab.two === 3, 'ab.two should be equal 3'));
console.log(assert(ab.three === 4, 'ab.three should be equal 4'));
console.log(assert(ab.four === 5, 'ab.four should be equal 5'));

try {
    a.map('string');
} catch(e) {
    console.log(assert(
        e.message === 'string is not a function',
        'should trow a exception'
    ));
}