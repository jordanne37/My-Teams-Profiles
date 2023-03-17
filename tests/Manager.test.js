const Manager = require("../lib/Manager");

Test("Can I create an office number.", () => {
    const testOffice = 303;
    const createEmployee = new Manager("Savannah", 1, "savannahquinn69@gmail.com", testOffice);
    expect(createEmployee.officeNumber).toBe(testOffice);
});
Test("Test office number.", () => {
    const testOffice = 303;
    const createEmployee = new Manager("Savannah", 1, "savannahquinn69@gmail.com", testOffice);
    expect(createEmployee.getOfficeNumber()).toBe(testOffice);
});
Test("Testing.", () => {
    const returnVal = "Manager";
    const createEmployee = new Manager("Savannah", 1, "savannahquinn69@gmail.com", 303);
    expect(createEmployee.getTest()).toBe(returnVal);
});


