function greet(name) {

    if (name === undefined )  {
        return "Hello friend";
    } else {
        return "Hello " + name;
    }
}
greet()
console.log(greet());
module.exports = { greet };