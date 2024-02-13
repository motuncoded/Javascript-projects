//Task: Create a function that demonstrates closure by accessing a variable from its outer scope.


//scope 
//global scope
var globalCount = 0; 
function globalScope() {
}
globalScope();
console.log(globalCount)

//local
function localScope() {
    var localCount = 0;
}
localScope()
console.log(localCount)

