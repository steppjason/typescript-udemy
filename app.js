function add(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number")
        result = n1 + n2;
    else
        result = n1.toString() + n2.toString();
    return result;
}
console.log(add(1, 2));
console.log(add('Hello', ' World'));
console.log(add(1, 'Testing'));
