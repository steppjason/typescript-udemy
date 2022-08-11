class Department {
	protected employees: string[] = []

	constructor(protected readonly name: string) {}

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

class ITDepartment extends Department {
	private lastReport: string

	get LastReport() {
		if (this.lastReport) return this.lastReport
		throw new Error('Last report not found')
	}

	set LastReport(report: string)
	{
		this.lastReport = report
	}

	constructor(public admins: string[]) {
		super("IT")
		this.lastReport = ''
	}

	printAdmins() {
		console.log(this.admins)
	}

	addEmployee(employee: string) {
		if (this.name === "Jason") return

		this.employees.push(employee)
	}

}

const accounting = new Department("Accounting")
accounting.addEmployee("Jason")
accounting.addEmployee("Anna")

accounting.printEmployeeInformation()

const informationTechnology = new ITDepartment(["Jason"])
informationTechnology.printAdmins()
informationTechnology.LastReport = 'New Report'
console.log(informationTechnology.LastReport)
