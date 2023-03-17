const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // const (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getTest() {
        return "Engineer";
    }
}
module.exports = Engineer;