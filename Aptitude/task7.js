function temp(Celsius) {
    let Fahrenheit = 1.8 * Celsius + 32;
    return Fahrenheit;

}
temp(-10);
console.log(temp(-10));
module.exports = { temp }