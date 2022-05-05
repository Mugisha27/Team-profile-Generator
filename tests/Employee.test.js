const Employee = require("../lib/Employee");

test("deploy Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("set name via constructor arguments", () => {
  const name = "Chris";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test(" set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Mugisha", testValue);
  expect(e.id).toBe(testValue);
});

test(" set email via constructor argument", () => {
  const testValue = "email@test.com";
  const e = new Employee("Mugisha", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("get name via getName()", () => {
  const testValue = "Chris";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test(" get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Mugisha", testValue);
  expect(e.getId()).toBe(testValue);
});

test("get email via getEmail()", () => {
  const testValue = "email@test.com";
  const e = new Employee("Mugisha", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("Chris", 1, "email@test.com");
  expect(e.getRole()).toBe(testValue);
});