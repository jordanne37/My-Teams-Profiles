const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // const (name, id, email);
        super(name, id, email)

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getTest() {
        return "Intern"
    }
}
module.exports = Intern