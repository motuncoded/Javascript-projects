let missingNum = [1, 2, , , , 6, 7, 8]
console.log(missingNum);//[ 1, 2, <3 empty items>, 6, 7, 8 ]
missingNum = missingNum.flat();
console.log(missingNum);//[ 1, 2, 6, 7, 8 ]
