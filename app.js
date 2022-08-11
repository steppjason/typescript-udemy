"use strict";
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(admins) {
        super("IT");
        this.admins = admins;
    }
    printAdmins() {
        console.log(this.admins);
    }
}
const accounting = new Department("Accounting");
accounting.addEmployee("Jason");
accounting.addEmployee("Anna");
accounting.printEmployeeInformation();
const informationTechnology = new ITDepartment(['Jason']);
informationTechnology.printAdmins();
