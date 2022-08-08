function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, callBack) {
    var result = n1 + n2;
    callBack(result);
}
printResult(add(5, 12));
var combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
addAndHandle(1, 2, function (result) {
    console.log(result);
});
