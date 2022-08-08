enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person: { name: string; age: number; hobbies: string[]; role: Role } = {
	name: "Jason",
	age: 36,
	hobbies: ["Video Games", "Reading"],
	role: Role.ADMIN,
}

console.log(person)
