function greet(name) {

    if (name === "") {
        return "Hello friend";
    } else {
        return "Hello " + name;
    }
}
greet()
console.log(greet());
module.exports = { greet };