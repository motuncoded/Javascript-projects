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
        //console.log(mylocal)// referenceerror, it is not defined.

    console.log(myGlobal);
}
fun1();
function fun2() {
      var mylocal = 50;

}
console.log(fun2)
fun2();

var outerWear = "t-shirt";//globl var
function myOutfit() {
    var outerWear = "sweater"
    return outerWear;
}
console.log(myOutfit())// sweater
console.log(outerWear) //t-shirt

//local scope inside the function
function myLocalScope(){
    var myVarr = 5;
    console.log(myVarr)

}
myLocalScope();
//using a return value

function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10))// 3
function timesFive(num) {
     return num *5
 }
console.log(timesFive(4)) //20
 //without return value
var sum = 0
function addThree(){
    sum = sum + 3
}
console.log(addThree())// undefined
//retrun value
var changed = 0;
function change(num){
    return (num + 5) / 3
}
console.log(change(10)) //5

var processed = 0;
function processArg(num) {
    return (num + 3) /5
}
console.log(processArg(6)) // 1.8
//stand in line
function nextInLine(arr, item) {

    arr.push(item)
    return arr.shift();

}
var testArr = [1, 2, 3, 4, 5]
console.log("Before:" + JSON.stringify(testArr))
console.log(nextInLine(testArr, 6));
console.log("After:" + JSON.stringify(testArr))
//boolean value 
function welcomeToBooleans() {
    return false;
}
//if statement
function outTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return 'Yes it is true'
    }
    return "No, it's false";

}
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true"
    }
    return "No, that was false"
}
console.log(trueOrFalse(true)) //Yes, that was true
function testEqual(val) {
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}
    console.log(testEqual(10)) //Not Equal
function testStrict(val) {
    if(val === 7){
        return "Equal";
    }
    return "Not Equal";
}
    console.log(testStrict(10)) //Not Equal
console.log(testStrict(7))  // Equal

console.log(testStrict("7")) //Not Equal
function compareEquality(a, b) {
    if(a === b){
        return "equal"
    }
    return "not equal"
}
console.log(compareEquality(10, "10"))// not equal
function testNotEqual(val) {
    if (val != 99) {
  return "equal"
    }
    return "not equal"
}
console.log(testNotEqual(22))//equal

function testStrictNotEqual(val) {
    if (val !== 17) {
  return "not equal"
    }
    return " equal"
}
console.log(testStrictNotEqual(22))//equal

