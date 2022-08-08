let userInput: unknown
let userName: string

userInput = 5
userInput = "Jason"

function generateError(message: string, code: number) {
	throw { message: message, errorCode: code }
}

generateError('An error occured', 500)
