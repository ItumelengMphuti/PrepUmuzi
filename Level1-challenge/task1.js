function multiples(num) {

    let sum = 0;
    for(let i = 0; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    } console.log(sum)
}
multiples(2);
module.exports = { multiples };