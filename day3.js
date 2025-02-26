"use strict";
// write a function that takes in a string 
//and returns true if its a palindrome
//pre:
//post: returns true if s from lo up to hi is a palindrome
//this a pure function
function isPalindrome(s, lo, hi = s.length - 1) {
    if (lo + 1 >= hi)
        return true;
    return (s[lo] == s[hi]) && isPalindrome(s, lo + 1, hi - 1);
}
let numsAr = [1, 2, 3, 4, 3, 2, 1, 3];
//triple each element in the array
let tripled = numsAr.map(x => x * 3);
console.log(tripled);
//count the number of threes in the array
console.log("3's", numsAr.filter(x => x == 3).length);
let strs = ['a', 'bob', 'alice', 'tom'];
//longest string in the array
console.log('longest string:', strs.reduce((a, b) => a.length > b.length ? a : b));
//sum of sqaures of even numbers
let sum = numsAr.filter(x => x % 2 == 0) //find evens
    .map(even => even * even) //sqaure evens
    .reduce((a, b) => a + b, 0); //sum
console.log('sum of squares of even numbers:', sum);
//maximum absolute value, if there are ties favor the negative number
let numAr2 = [-8, 3, 8, -5, -2, 1, -10];
let maxAbs = numAr2.reduce((a, b) => Math.abs(a) > Math.abs(b) ? a : b);
console.log('max abs:', maxAbs);
function removeDups(ar) {
    return ar.filter((v, i) => ar.indexOf(v) == i);
}
//test removeDups
let dups = [1, 2, 3, 4, 3, 2, 1, 3];
console.log(removeDups(dups));
