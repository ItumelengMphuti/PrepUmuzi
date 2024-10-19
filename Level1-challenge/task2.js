function hasThree(a, b) {
    let sum = a + b;

    // Return true if either number is 3 AND the sum contains the digit '3'
    if ((a === 3 || b === 3) && sum.toString().includes('3')) {
        return true;
    } else {
        return false;
    }
}

console.log(hasThree(25, 3));  // false, because 28 does not contain '3'
console.log(hasThree(3, 27));  // true, because a = 3 and the sum 30 contains '3'
console.log(hasThree(1, 2));   // false, neither number is 3
console.log(hasThree(3, 3));   // true, because a = 3, b = 3, and the sum 6 doesn't matter
module.exports = { hasThree };
