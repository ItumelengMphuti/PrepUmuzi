function number(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    } if (c > max) {
        max = c;
    } 
    return max;
}

number(-1,-15,0);
console.log(number(-1,-15,0));

module.exports = { number };