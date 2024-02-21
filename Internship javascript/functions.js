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
    console.log("outer");
    function inner() {
            console.log("inner");

    }
    inner()

}

outer()
//function scope
function doSomething() {
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x, y, z)
}
doSomething()
//console.log(z)
function outer(x){
    function inner(y) {
        return x + y;
    }
    return inner;
}
const outerReturn = outer(10);
outerReturn(2);
//callback function
function foo(bar) {
    bar()
}
foo(function () {
    console.log("bar")
})
function named() {
    console.log("bar")
}
foo(named);
function fooo(bar) {
    if (itsNight) {
        bar();
    }
    if (isDrinksOverCheckOnLine) {
        bar();
    }
}
//High Order Function
//it takes one or more functions as argument
//it may return a function
function getCapture(camera) {
    camera()
}
getCapture(function () {
    console.log("Canon")
})
function returnFn() {
    return function () {
        console.log("returning")
    }
}
//const fn = returnFn();
//fn();
//example7
 [1, 2, 3].filter(function (elem) {
    elem > 2;
    
})
//Pure
function sayGreeting(name) {
    return `Hello ${name}`;

}
console.log(sayGreeting("Tapas"));
let greeting = "Hello";
function sayGreeting1(name) {
    return `${greeting} ${name}`;
}
console.log(sayGreeting1("Tapas"));
greeting = "helo"
console.log(sayGreeting1("Tapas"));
//immediate invoke function expression
function y(val) {
    console.log(val)
}
function xy() {
    y();
}
function xz() {
    xy();
}
//recursion
/*function foo() {
    console.log("foo");
        foo();

}
foo();*/
//const fooo = function buz() {
    //foo()
//}
function recurse(count) {
    if (count === 0) {
        console.log("No more water")
        return;
    }
    console.log("Fetching water")
    recurse(count -1)
}
fetchWater(5);