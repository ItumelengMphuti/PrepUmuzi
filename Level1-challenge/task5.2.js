function triangle(num) {
    let size;

    // Replacing the ternary operator for size
    if (num < 0) {
        size = -num;  // Convert to positive if num is negative
    } else {
        size = num;   // Keep the value as is if num is positive
    }

    for (let i = 1; i <= size; i++) {
        let row = '';

        // Replacing the ternary operator inside the loop
        if (num < 0) {
            for (let j = 1; j <= size - i + 1; j++) {
                row += '#';  // If num is negative, decreasing number of '#'
            }
        } else {
            for (let j = 1; j <= i; j++) {
                row += '#';  // If num is positive, increasing number of '#'
            }
        }

        console.log(row);
    }
}

triangle(5);
console.log();
triangle(-5);

module.exports = { triangle };
