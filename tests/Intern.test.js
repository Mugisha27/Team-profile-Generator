const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Can set school through constructor", () => {
    const testValue = "Seattle";
    const e = new Intern("Mugisha", 1, "email@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Mugisha", 1, "email@test.com", "Seattle");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "Seattle";
    const e = new Intern("Mugisha", 1, "email@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});