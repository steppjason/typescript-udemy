type Admin = {
	name: string
	priviledges: string[]
}

type Employee = {
	name: string
	startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
	name: "Jason",
	priviledges: ["create-server"],
	startDate: new Date(),
}

function add(a: number, b: number) {
	if (typeof a === "string" || typeof b === "string") return a.toString() + b.toString()
	return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(employee: UnknownEmployee) {
	console.log("Name: " + employee.name)
	if ("priviledges" in employee) console.log("Priviledges: " + employee.priviledges)
	if ("startDate" in employee) console.log("Start Date: " + employee.startDate)
}

printEmployeeInformation({ name: "Jason", startDate: new Date() })
printEmployeeInformation({ name: "Jason", priviledges: ["create-server"] })

interface Bird
{
	type: 'bird'
	flyingSpeed: number
}

interface Horse
{
	type: 'horse'
	runningSpeed: number
}

type Animal = Bird | Horse 

function moveAnimal(animal: Animal)
{
	let speed: number
	switch (animal.type){
		case 'bird':
			speed = animal.flyingSpeed
			break
		case 'horse':
			speed = animal.runningSpeed
			break
	}

	console.log('Move speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})
moveAnimal({ type: 'horse', runningSpeed: 20 })

