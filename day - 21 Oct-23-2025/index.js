/*
// Array
const cityList = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];


console.log(cityList[4]);
console.log(cityList.push("Noakhali"));
console.log(cityList.push("Barishal", "Bhrammonbaria"));
console.log(cityList.pop());
console.log(cityList.shift());
console.log(cityList.unshift("Dinajpur"));
console.log(cityList.unshift("Bogura", "Rajshahi"));
// console.log(cityList);
console.log(cityList.indexOf("Chicago"));
console.log(cityList.indexOf("Shyleth"));
console.log(cityList.length);

for (let i = 0; i < cityList.length; i++) {
    console.log(cityList[i]);
}



cityList.forEach(function(city, i) {
    console.log(i + " = " +city);
});


const numbers = [6, 12, 8, 20, 15, 7, 3, 10];
// Sort the numbers in ascending order
numbers.sort(function(a, b) {
    return a - b;
});
console.log("Sorted Numbers: ", numbers);
// Sort the numbers in descending order
numbers.sort(function(a, b) {
    return b - a;
});
console.log("Sorted Numbers (Descending): ", numbers);
// Find the maximum number
const maxNumber = Math.max(...numbers);
console.log("Maximum Number: ", maxNumber);
// Find the minimum number
const minNumber = Math.min(...numbers);
console.log("Minimum Number: ", minNumber);
// Calculate the sum of all numbers
const sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);
console.log("Sum of Numbers: ", sum);
*/

// Multidimensional Array
const students = [
    ['Zeba', "Madaripur", 24, false],
    ['Orpita', "Faridpur", 22, false],
    ['Turza', "Noakhali", 23, true]
]
console.log(students[1][0]);
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}
