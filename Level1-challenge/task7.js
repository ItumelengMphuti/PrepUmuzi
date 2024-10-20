function combine(arr1, arr2) {
    const comb = [];
    let i = 0;

    // Continue looping while there are still elements in either array1 or array2
    while (i < arr1.length || i < arr2.length) {
        if (i < arr1.length) {
            comb.push(arr1[i]);  // Add element from array1 if i is within bounds
        }
        if (i < arr2.length) {
            comb.push(arr2[i]);  // Add element from array2 if i is within bounds
        }
        i++;  // Move to the next index
    }

    return comb;
}

console.log(combine([11,22,33,45], [1,2,3]));  // Test example

module.exports = { combine };
