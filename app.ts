class Department {
	private employees: string[] = []

	constructor(private readonly name: string) {}

	describe(this: Department) {
		console.log("Department: " + this.name)
	}

	addEmployee(employee: string) {
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

const accounting = new Department("Accounting")
accounting.addEmployee("Jason")
accounting.addEmployee("Anna")

accounting.printEmployeeInformation()
