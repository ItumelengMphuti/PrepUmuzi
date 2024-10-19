function isSixtyFive(a,b) {
    let sum = a + b;
    if(a === 65 || b === 65 || sum === 65) {
        return true;
    } else {
        return false;
    }
}

console.log(isSixtyFive(10, 20));
module.exports = { isSixtyFive };