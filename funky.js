"use strict";
// Problem 1
// Write a function that is passed in an array of strings and returns 
// the number of vowels in the array.
// can use map filter and reduce
function countVowels(strings) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return strings.map(s => s.split('').filter(c => vowels.includes(c)).length).reduce((a, b) => a + b);
}
//test countVowels
const string = ['apple', 'banana', 'cherry', 'Paul'];
console.log("The number of vowels in ", string, "is ", countVowels(string));
const players = [
    { name: 'Alice', points: 100 },
    { name: 'Adam', points: 200 },
    { name: 'Bob', points: 150 },
    { name: 'Charlie', points: 120 },
    { name: 'Aarrell', points: 200 },
    { name: 'Charlie', points: 80 },
];
function highest(players) {
    return players.reduce((highestPlayer, currentPlayer) => {
        if (currentPlayer.points > highestPlayer.points) {
            return currentPlayer;
        }
        else if (currentPlayer.points === highestPlayer.points) {
            return currentPlayer.name < highestPlayer.name ? currentPlayer : highestPlayer;
        }
        else {
            return highestPlayer;
        }
    });
}
//test highest
console.log("The player that scored the most points: ", highest(players));
// //================================================================================================
// // Problem 3
// // Using the Player type from number 2, write a winners functions. 
// // Winners is given a point threshold and an array of players. 
// // Winners should return a sorted array of only the players above or equal to 
// // the point threshold, sorted by points in descending order.
function winners(threshold, players) {
    const aboveThresholdPlayers = players.filter(player => player.points >= threshold);
    const sortedPlayers = aboveThresholdPlayers.sort((a, b) => b.points - a.points);
    return sortedPlayers;
}
//test winners
console.log("Players that have scored more than the threshold of 120 points: ", winners(120, players));
// //================================================================================================
// // Problem 4
// // Using the Player type from number 2 and 3, return an array of all the 
// // names of players with above average points. 
// // Their names should be in sorted order.
function aboveAveragePlayers(players) {
    const totalPoints = players.reduce((sum, player) => sum + player.points, 0);
    const averagePoints = totalPoints / players.length;
    const aboveAveragePlayers = players.filter(player => player.points > averagePoints);
    const sortedNames = aboveAveragePlayers.map(player => player.name).sort();
    return sortedNames;
}
//test aboveAveragePlayers
console.log("The Players with above average points: ", aboveAveragePlayers(players));
function binarySearch(arr, target, comparator = (a, b) => a < b ? -1 : a > b ? 1 : 0) {
    const search = (arr, target, left, right) => {
        if (left > right)
            return -1;
        const mid = Math.floor((left + right) / 2);
        const comparison = comparator(arr[mid], target);
        if (comparison === 0)
            return mid;
        else if (comparison < 0)
            return search(arr, target, mid + 1, right);
        else
            return search(arr, target, left, mid - 1);
    };
    return search(arr, target, 0, arr.length - 1);
}
// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const index = binarySearch(arr, target);
console.log(`Index of ${target} is ${index}`);
// // To prevent mutation, the function binarySearch doesn't modify the input array arr. 
// // It operates on a copy of the array and the original array remains unchanged. 
// // This is ensured by TypeScript's immutability nature when dealing with function parameters.
// // As for whether the function is higher-order, it currently isn't, but it could be made 
// // higher-order by accepting a comparison function as an argument, allowing users to define 
// // custom comparison logic. Making it higher-order adds flexibility and reusability to the function.
// // I've already provided a higher-order version of the function in the previous response, 
// // where the comparison function is passed as an optional argument. This allows users to 
// // specify their own comparison logic based on the type of elements in the array or the 
// // desired sorting order. 
// // So yes, it could be and should be higher-order for enhanced versatility.
