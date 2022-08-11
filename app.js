"use strict";
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
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
        this.lastReport = "";
    }
    get LastReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("Last report not found");
    }
    set LastReport(report) {
        this.lastReport = report;
    }
    printAdmins() {
        console.log(this.admins);
    }
    addEmployee(employee) {
        if (this.name === "Jason")
            return;
        this.employees.push(employee);
    }
}
const accounting = new Department("Accounting");
accounting.addEmployee("Jason");
accounting.addEmployee("Anna");
accounting.printEmployeeInformation();
const informationTechnology = new ITDepartment(["Jason"]);
informationTechnology.printAdmins();
informationTechnology.LastReport = "New Report";
console.log(informationTechnology.LastReport);
const employee1 = Department.createEmployee('Tim');
console.log(employee1);
