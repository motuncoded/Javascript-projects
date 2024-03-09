let missingNum = [1, 2, , , , 6, 7, 8]
console.log(missingNum);//[ 1, 2, <3 empty items>, 6, 7, 8 ]
missingNum = missingNum.flat();
console.log(missingNum);//[ 1, 2, 6, 7, 8 ]
function printToConsole(test){
  console.log(`value:${test}`)
}
function multiply(a,b, callback){
  const result  = a + b;
  callback(result);
}
function newFunction(){
  return multiply(5,5, printToConsole)
}
  setTimeOut(newFunction, 2000)

