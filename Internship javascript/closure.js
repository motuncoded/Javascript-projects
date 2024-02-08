// Closure is a function that access a var outside its function
// return function from a function
function outer(a = 0) {
    return function inner() {
        return a++;
    }
}
let fun = outer()
console.log(fun)