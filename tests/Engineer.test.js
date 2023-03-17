const Engineer = require("../lib/Engineer");

Test("Can I create a github.", () => {
    const testGithub = "SavannahQuinn";
    const createEmployee = new Engineer("Savannah", 1, "savannahquinn69@gmail.com", testGithub);
    expect(createEmployee.github).toBe(testGithub);
});
test("Test that getGithub will return the github of employee.", () => {
    const testGithub = "SavannahQuinn";
    const createEmployee = new Engineer("Savannah", 1, "savannahquinn69@gmail.com", testGithub);
    expect(createEmployee.getGithub()).toBe(testGithub);
});
test("Testing.", () => {
    const returnVal = "Engineer";
    const createEmployee = new Engineer("Savannah", 1, "savannahquinn69@gmail.com", "SavannahQuinn");
    expect(createEmployee.getTest()).toBe(returnVal);
});
