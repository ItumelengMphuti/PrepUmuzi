function number(a, b, c) {
    let max = a;
    let args = [a, b, c];
    
    for (let i = 1; i < 3; i++) {
        if (args[i] > max) {
            max = args[i];
        }
    }
    
    return max;
}
number(1, 2, 3)
console.log(number(1, 2, 3));
module.exports = { number };