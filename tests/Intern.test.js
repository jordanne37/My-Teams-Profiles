const Intern = require("../lib/Intern");


Test("Can I create a school.", () => {
    const testSchool = "Rider University";
    const createEmployee = new Intern("Savannah", 1, "savannahquinn69@gmail.com", testSchool);
    expect(createEmployee.school).toBe(testSchool);
});

Test("Can I create an office number.", () => {
    const testSchool = "Rider University";
    const createEmployee = new Intern("Savannah", 1, "savannahquinn69@gmail.com", testSchool);
    expect(createEmployee.getSchool()).toBe(testSchool);
});


Test("Testing.", () => {
    const returnVal = "Intern";
    const createEmployee = new Intern("Savannah", 1, "savannahquinn69@gmail.com", "Rider University");
    expect(createEmployee.getTest()).toBe(returnVal);
});
