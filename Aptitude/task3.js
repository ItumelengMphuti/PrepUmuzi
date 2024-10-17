function number(num) {
    if(num % 2 === 0) {
        return "even" 
    } else {
        return "odd"
    }
}

number(22);
console.log(number(22));
module.exports = { number };
