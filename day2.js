"use strict";
let x = 3;
const s = "abc";
const b = true;
const ar = [1, 2, 3, 4, 5];
// let t : Tree<number> = {left: null, val: 4, right: null};
const t = { left: null, val: 4, right: null };
t.left = { left: null, val: 3, right: null };
//mutation has to do with state
//if a value of a variable is different in two different states
//then the variable is mutable
//fine no muation 
const str = "123";
const a = Number(str);
const str2 = a.toString();
//High order function
//a higher order function is a function 
//that takes a function as a parameter
//or returns a function as a result
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function squared(x) {
    return x * x;
}
let abc = nums.map(x => x * x);
let def = nums.map(squared);
console.log(abc, def);
// we need side effects here. Technically we could use recursion
//a higher order function
function ourMap(f, ar) {
    const res = [];
    for (const val of ar) {
        res.push(f(val));
    }
    return res;
}
//filter takes in a predicate function p
//predicate functions are functions that return true or false
//and an array. and returns an array of the elements that satisfy the
//predicate bu satisfy we mean it returns true
function ourFilter(p, ar) {
    const filtered = [];
    for (const val of ar) {
        if (p(val)) {
            filtered.push(val);
        }
    }
    return filtered;
}
// reduce takes in an array
// and a function that combines two elements together
function ourReduce(f, init, ar) {
    for (const val of ar) {
        init = f(val, init);
    }
    return init;
}
ourReduce((a, b) => a + b, 0, [1, 2, 3]);
