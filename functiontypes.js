"use strict";
function addFunction(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, callBack) {
    const result = n1 + n2;
    callBack(result);
}
printResult(addFunction(5, 12));
let combinedValues;
combinedValues = addFunction;
console.log(combinedValues(8, 8));
addAndHandle(1, 2, (result) => {
    console.log(result);
});
