'use strict';
var assert = require('./assert'),
    proto = require('./proto');

function A() {
    this.one = 1;
}

A.prototype = Object.create(Object.assign({}, proto(A)));

let a = new A();

a['two'] = 2;
a['three'] = function () {};

let ab = a.map(v => v + 1);

console.log(assert(ab.one === 2, 'ab.one should be equal 2'));
console.log(assert(ab.two === 3, 'ab.two should be equal 3'));
console.log(assert(
    typeof ab.three === 'function',
    'ab.three should be a function'
));

try {
    a.map('string');
} catch(e) {
    console.log(assert(
        e.message === 'string is not a function',
        'should trow a exception'
    ));
}
