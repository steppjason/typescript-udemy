interface Person {
	name: string
	age: number

	greet(phrase: string): void
}

let user1: Person

user1 = {
	name: "Jason",
	age: 36,
	greet(phrase: string) {
		console.log(phrase)
	},
}

user1.greet("Hello World")