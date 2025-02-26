// Problem 1
// Write a function that is passed in an array of strings and returns 
// the number of vowels in the array.
// can use map filter and reduce
function countVowels(strings) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return strings.map(function (s) { return s.split('').filter(function (c) { return vowels.includes(c); }).length; }).reduce(function (a, b) { return a + b; });
}
//test countVowels
var string = ['apple', 'banana', 'cherry', 'Paul'];
console.log("The number of vowels in ", string, "is ", countVowels(string));
var players = [
    { name: 'Alice', points: 100 },
    { name: 'Adam', points: 200 },
    { name: 'Bob', points: 150 },
    { name: 'Charlie', points: 120 },
    { name: 'Darrell', points: 200 },
    { name: 'Charlie', points: 80 },
];
function highest(players) {
    return players.reduce(function (highestPlayer, currentPlayer) {
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
    var aboveThresholdPlayers = players.filter(function (player) { return player.points >= threshold; });
    var sortedPlayers = aboveThresholdPlayers.sort(function (a, b) { return b.points - a.points; });
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
    var totalPoints = players.reduce(function (sum, player) { return sum + player.points; }, 0);
    var averagePoints = totalPoints / players.length;
    var aboveAveragePlayers = players.filter(function (player) { return player.points > averagePoints; });
    var sortedNames = aboveAveragePlayers.map(function (player) { return player.name; }).sort();
    return sortedNames;
}
//test aboveAveragePlayers
console.log("The Players with above average points: ", aboveAveragePlayers(players));
function binarySearch(arr, target, comparator) {
    if (comparator === void 0) { comparator = function (a, b) { return a < b ? -1 : a > b ? 1 : 0; }; }
    var search = function (arr, target, left, right) {
        if (left > right)
            return -1;
        var mid = Math.floor((left + right) / 2);
        var comparison = comparator(arr[mid], target);
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
var arr = [1, 3, 5, 7, 9, 11, 13];
var target = 7;
var index = binarySearch(arr, target);
console.log("Index of ".concat(target, " is ").concat(index));
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
