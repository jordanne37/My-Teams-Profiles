const Employee = require("../lib/Employee.js");

Test("Can we create a new employee profile?", () => {
    const createEmployee = new Employee();
    expect(typeof(createEmployee)).toBe("object");
})
test("Test name of employee.", () => {
    const name = "Savannah";
    const createEmployee = new Employee(name);
    expect(createEmployee.name).toBe(name);
})
test("Test ID of employee.", () => {
    const id = 1;
    const createEmployee = new Employee("Savannah", id);
    expect(createEmployee.id).toBe(id);
})
test("Test email of employee.", () => {
    const email = "savannahquinn69@gmail.com";
    const createEmployee = new Employee("Savannah", 1, email);
    expect(createEmployee.email).toBe(email);
})




test("Can test get name.", () => {
    const testName = "Savannah";
    const createEmployee = new Employee(testName);
    expect(createEmployee.getName()).tobe(testName);
})
test("Can test get ID.", () => {
    const testID = 1;
    const createEmployee = new Employee("Savannah", testID);
    expect(createEmployee.getId()).tobe(testId);
})
test("Can test get email.", () => {
    const testEmail = "savannahquinn69@gmail.com";
    const createEmployee = new Employee("Savannah", 1, testEmail);
    expect(createEmployee.getEmail()).tobe(testEmail);
})
test("Test.", () => {
    const returnVal = "Employee";
    const createEmployee = new Employee("Savannah", 1, "savannahquinn69@gmail.com");
    expect(createEmployee.getTest()).tobe(returnVal);
})