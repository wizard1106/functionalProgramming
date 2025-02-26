"use strict";
function identity(x) {
    return x;
}
const f = identity;
// f o g
// g : (x: X) => Y
// f : (y: Y) => Z
function compose(f, g) {
    return x => f(g(x));
}
function successor(n) {
    return n + 1;
}
//     let isPrime = [... Array(Math.floor(Math.sqrt(n)+ 1))]
//         .map((_,i) => i+2)
//         .every(v => n%v != 0)
//     return !isPrime;
// }
//intersection of two lists
function intersection(bob, alice) {
    //functional
    const set = new Set(alice);
    return bob.filter(v => !set.has(v));
}
// a pure function has no side effects
// a pure function, given the same input, will always return the same output
