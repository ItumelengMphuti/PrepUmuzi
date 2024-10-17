function area(a, b, c) {
    const s = (a + b + c) /2;
    const area = parseInt((s * (s-a)*(s-b)*(s-c)) ** 0.5);

    return area;
}
area(7, 8, 10);

console.log(area(7, 8, 10))
module.exports = { area };