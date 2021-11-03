/**
 * Checks if a number is even or odd
 * @param num
 * @returns "even" if the number is even, else returns "odd"
 */
function evenOrOdd(num) {
    if(num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(evenOrOdd(12));
console.log(evenOrOdd(1));
console.log(evenOrOdd(25));