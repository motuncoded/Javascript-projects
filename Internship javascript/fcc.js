console.log("hello");
//to add numbers
var sum = 10 + 0;
console.log(sum)
// to subtract number
var difference = 45 - 3;
console.log(difference)
// multiply numbers
var product = 8 * 10
console.log(product)
// to divide number
var quotient = 66 / 3;
console.log(quotient)
//to increment numbers
var myVar = 88;
myVar = myVar + 1 // or myVar++
console.log(myVar)
//to decrement number
var myVal = 80;
myVal = myVal - 1; // or myVal--
console.log(myVal);
// remainder
var remainder = 11 % 3;
console.log(remainder)
// string variable
var firstName = "Motunrayo";
var myStr = "I am \"a girl \" in Lagos";
console.log(myStr)
var my_str = `I am \"a girlie\"`;
console.log(my_str);
var my__str = "FirstLine\n\t\SecondLine\nThirdLine";
console.log(my__str);
//concatenation
//var ourStr = "I come first." + "I come second";
{/*var ourStr = "Hello" + " ";
var meStr = "You are welcome";
ourStr+=meStr;*/}
var meStr = "Hello" + " ";
var ourStr = meStr + "My name is Motun"
console.log(ourStr);
//length of astring
var firstName = "Motunrayo";
firstNameLength = firstName.length;
console.log(firstNameLength)
//know the index
firstIndex = firstName[8];
console.log(firstIndex)
//string immutability
firstName[3] = "a"
console.log(firstIndex)// o not changed
//array
//nested array or multi nested array
var myArray = [["Motun", 26], "Adeneye"]
//accessing array
var myNum = [50, 60, 70]
console.log(myNum[0])
//using index to change array
myNum[2] = 30;
console.log(myNum[2])// 30
//accessing multidimensional array
var my_arr = [[1,2,3],[4,5,6], [7,8,9]]
console.log(my_arr[2][0])//7
//using push to add items to array
my_arr.push([10, 11, 12])
console.log(my_arr);
//using pop to remove the last item
my_arr.pop();
console.log(my_arr);
//using the shift, it remove the first element
my_arr.shift();
console.log(my_arr);//[ [ 4, 5, 6 ], [ 7, 8, 9 ] ]
my_arr.unshift([2, 3, 4])
console.log(my_arr);[[2, 3, 4], [4, 5, 6], [7, 8, 9]]
//reuseable function
function hello() {
    console.log("hello world")
}
hello();
function ourFunctionWithArg(a, b) {
    console.log(a + b);
}
ourFunctionWithArg(10, 5)
//global scope 
var myGlobal = 10; 
function fun1() {
        console.log(mylocal)// referenceerror, it is not defined.

    console.log(myGlobal);
}
fun1();
function fun2() {
    var mylocal = 50;
        console.log(myGlobal);

    console.log(mylocal)
}
fun2();
var outerWear = "t-shirt";
function myOutfit() {
    return outerWear;
}
console.log(myOutfit())
