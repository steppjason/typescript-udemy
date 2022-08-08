var userInput;
var userName;
userInput = 5;
userInput = "Jason";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
