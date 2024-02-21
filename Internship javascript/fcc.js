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
//using a return value+

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

function testGreaterThan(val){
    if (val > 100) {
     return "greater than 100"
    }
    if (val > 10) {
        return "Over 10";
   }
   return "10 or Under"
}
console.log(testGreaterThan(10))//"10 or Under"
function testGreaterThanOrEqualTo(val){
    if (val >= 100) {
     return "greater than 100"
    }
    if (val >= 10) {
        return "Over 10";
   }
   return "10 or Under"
}
console.log(testGreaterThanOrEqualTo(10))//"Over 10"
function testLessThan(val) {
    if (val < 25) {
        return "Under 25"; 
    }
    if(val < 55){
        return "Under 55"
    }
    return "55 or over";
}
 console.log(testLessThan(10))//Under 25
function testLessThanEqualTo(val) {
    if(val <= 12){
        return "Smaller than or Equal to 12"
    }
       if(val <= 24){
        return "Smaller than or Equal to 24"
    }
return "More than 24"
}
console.log(testLessThanEqualTo(10))//Smaller than or Equal to 12
//and operator
function testLogicalAnd(val){
    if(val <= 50 && val >= 25){
        return "Yes";
    }
    return "No"
}
console.log(testLogicalAnd(10))// No
// or operator
function testLogicalOr(val) {
    if (val < 10 || val > 20 ) {
        return "Outside"
    }
    return "Inside"
}
console.log(testLogicalOr(10))//Inside
//else statement
function testElse(val) {
    var result = "";
    if(val > 5){
        result = "Bigger than 5"
    }else {
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse)
function testElseIf(val) {
    if(val > 5){
        return "Greater than 10";
    }
    else if(val < 10){
        return "Smaller than 5"
    }else{
return "Between 5 and 10"
    }

}
console.log(testElseIf(3))
function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    }else if (val < 5){
        return "Less than 5";
    } else {
        return "Greater than or equal  to 10";
    }
}
console.log(orderMyLogic(7));
function testSize(num) {
    if (num < 5){
        return "Tiny";
    }else if(num < 10){
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    }else{
        return "Huge"
    }
}
console.log(testSize(7));
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par","Bogey", "Double Bogey","Go Home"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    }else if (strokes == par - 1) {
        return names[2];
    }else if (strokes == par) {
        return names[3];
    }else if (strokes == par + 1) {
        return names[4];
    }else if (strokes == par + 2) {
        return names[5];
    }else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 4))
console.log(golfScore(5,2))




//Switch statement
function switchStatement(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer ="beta";
            break
        case 3:
            answer ="gamma";
            break
        case 4:
            answer ="delta";
            break
      
    }

    return answer;   
}
console.log(switchStatement(1))
console.log(switchStatement(3))
function days(val) {
    var day = "";
    switch(val){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = " Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Satursday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "There is no such day";
    }
    return day;
}
console.log(days(0))
function switchOfStuff(val) {
    var stuff = "";
    switch (val) {
        case 1:
            stuff = "Rice";
            break;
        case 2:
            stuff = "Indomie";
            break;
        case 3:
            stuff = "Plantain";
            break
        default:
            stuff = "No stuff";
    }
    return stuff;
}
console.log(switchOfStuff(9))













function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Median";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "No grade";
    }
    return answer;
    
}
console.log(sequentialSizes(5))
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = " Marley";
            break;
        case 42:
            answer = "The Answer";
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        default:
            answer = "Nothing"


    }
}
console.log(chainToSwitch(5))
function isLess(a, b) {
    return (a < b) 
       
    
}
console.log(isLess(10, 15));
console.log(isLess(20, 23))
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    } else {
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
    }
}
console.log(abTest(2, 2));
console.log(abTest(-2, 2));
var count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "j":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
            
    }
    var holdBet = "Hold";
    if (count > 0) {
        holdBet = "Bet";
    }
    return count + " "+ holdBet;
}
cc("K")
//objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends":["everything!"]
}
var myDog = {
      "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends":["everything!"]
}
var testObj = {
    "hat": "ballcap",
    "shirt": "jersery",
    "shoes": "cleats"
}
var hatValue = testObj.hat;
console.log(hatValue)
var shirtValue = testObj.shirt;
console.log(shirtValue);



























