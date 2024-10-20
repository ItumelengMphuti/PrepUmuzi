// Using the ternary Operator

function triangle(num) {
    const size = num < 0 ? -num : num;

    for (let i = 1; i <= size; i++) {
        let row = '';
        for (let j = 1; j <= (num < 0 ? size - i + 1 : i); j++) {
            row += '#';
        }
        console.log(row);
    }
}

triangle(5);
console.log();
triangle(-5);
module.exports = { triangle };