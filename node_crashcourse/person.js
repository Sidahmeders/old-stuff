// Module Wrapped funcion
// (function(module, exports, require, module, __filename, __dirname) {

// }) 


class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    greeting() {
        console.log(`my name is ${this.name} and im ${this.age}`)
    }
}

module.exports = Person;