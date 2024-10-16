function greet(name = "friend") {

    return "Hello " + name;
}

greet("Tumi"); // Friend is overriden by Tumi

console.log(greet("Tumi"));

module.exports = { greet };
