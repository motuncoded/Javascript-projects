function first(parameter) {
    console.log(parameter)
}
first("hi")
function printMe() {
    console.log("..printing")
}
printMe("tapas")
const count = 200;
const print = function(){
    console.log("print")
}
const printMeWithArg = function (a,b) {
    console.log(a, b);
}
printMeWithArg(5, 7)
function x(a, b) {
    console.log(a + b)
}
let p = x(2,7)
function y(a,b){
    console.log(p+a+b)
}
y(4, 9)
function sum(a, b) {
    return a + b;

}
sum(2, 3)
function mult(a, b) {
    let val = a * b;
    return val;
}
console.log(mult(3, 8))
function calc(a, b) {
    return (2 * (a + b));
}
calc(4, 5)// 24
function ccalc(a,b) {
return (2 * (a + b));

}
ccalc(9, 8);//NaN because a and b is not defined;
function cccalc(c, d=2) {
return 2 * (c + d);

}
cccalc(7);
//rest parameter
function collect(x, ...y) {
    console.log(x);
    console.log(...y)
}
collect(1,2,3,4,5,6,7,8)
// arrow function
const addNum = (x, y) => {
    return x + y;
}
addNum(2, 3);
//Nested functions
function outer() {
    console.log("outer")
}