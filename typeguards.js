"use strict";
const e1 = {
    name: "Jason",
    priviledges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string")
        return a.toString() + b.toString();
    return a + b;
}
function printEmployeeInformation(employee) {
    console.log("Name: " + employee.name);
    if ("priviledges" in employee)
        console.log("Priviledges: " + employee.priviledges);
    if ("startDate" in employee)
        console.log("Start Date: " + employee.startDate);
}
printEmployeeInformation({ name: "Jason", startDate: new Date() });
printEmployeeInformation({ name: "Jason", priviledges: ["create-server"] });
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Move speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 20 });
