"use strict";
function add(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === 'as-number')
        result = +n1 + +n2;
    else
        result = n1.toString() + n2.toString();
    return result;
}
console.log(add(1, 2, 'as-number'));
console.log(add('Hello', ' World', 'as-text'));
console.log(add(1, 'Testing', 'as-text'));
