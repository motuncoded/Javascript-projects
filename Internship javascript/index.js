var x = 2;
var y;
var z = 5;
function walk(distance) {
    console.log(distance)
}// decalare a function
//assuming you have a function, work with a parameter, 100
walk(100);// calling a function, invoke a function
function divisible(number) {
    if (number % 15 == 0) {
        console.log("fizzbuzz")
    } else if (number % 5 == 0) {
        console.log("buzz")
    } else if (number % 3 == 0){
        console.log("fizz")
    }
}
divisible(3);// fizz
divisible(5);// buzz
divisible(15); //fizzbuzz

