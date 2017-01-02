'use strict';
var assert = require('./assert'),
    proto = require('./proto'),
    print = require('./print');

function A() {
    this.one = 1;
}

A.prototype = Object.assign(
    {
        f: function f() {}
    }, 
    proto(A)
);

let a = new A();

a['two'] = 2;
a['three'] = function () {};

let ab = a.map(v => v + 1);

print(assert(ab.one === 2, 'ab.one should be equal 2'));
print(assert(ab.two === 3, 'ab.two should be equal 3'));
print(assert(
    typeof ab.three === 'function',
    'ab.three should be a function'
));
print(assert(
    typeof ab.f === 'function',
    'ab.f should be present in the object'
));
print(assert(
    typeof ab.map === 'function',
    'ab.map should be present in the object'
));


try {
    a.map('string');
} catch(e) {
    print(assert(
        e.message === 'string is not a function',
        'should trow a exception'
    ));
}
