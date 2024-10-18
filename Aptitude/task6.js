function numbers(...num) {
    if(num.length === 0) {
        return undefined;
    }
    let max = num[0];
    for(let i = 1; i < num.length; i++) {
        if(num[i] > max) {
            max = num[i];
        }
    }
    return max;
}
numbers(1,2,44,3)
console.log(numbers(1,2,44,3));
module.exports = { numbers };