var petDog = "Rex";
var petCat = "Pepper"
// declaration of variables
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is:" + petDog)
console.log("My pet cat's name is: " + petCat)
var  catSound = "purr";
var dogSound = "woof";
console.log(petDog + " says " + dogSound)
console.log(petCat + " says " + catSound)
catSound = "meow";
console.log(petCat + " now says " + catSound)

//
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10);

var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

console.log(5 + 10); // 15

var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d); // "Now in 3D!"

var counter = 0;
counter += 5;
counter += 3;
console.log(counter); // 8

var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
} else {
   //this block will run if no condition matches
   console.log('The value of the age variable is not numerical')
}
var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Do something');
       break;
   case 'Tuesday':
       console.log('Do something');
       break;
   case 'Wednesday':
       console.log('Do something');
       break;
   case 'Thursday':
       console.log('Do something');
       break;
   case 'Friday':
       console.log('Do something');
       break;
   case 'Saturday':
       console.log('Do something');
       break;
   case 'Sunday':
       console.log('Do something');
        break;
      default:
       //this block will run if no condition matches
       console.log('There is no such day');
}
for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');
for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');
var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');
var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};
for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        //this block will run if no condition matches
        console.log(i)
    }
}
for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

function addTwoNums(a, b) {
    try{
if(typeof(a)!= "number"){
    throw "the first argument is not a number"
} else if (typeof (b) != "number") {
    return 'the second argument is not a number';
        }
else {
    console.log(a + b)
        }
        
    
    }catch(err){
        console.log("Error!", err);
    }
    console.log("It still works")
 }

addTwoNums(5 + "5")
//objects
//constructors
function icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
let kiwiIcecream = new icecream("kiwi");
let appleIcecream = new icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
var bird = {
    "beak" : "crooked",
    "teeth" : "no teeth",
    "fur" : "feather"
}
var eagle1 = Object.create(bird)
console.log("eagle1", eagle1)
console.log("eagle1.beak:", eagle1.beak)
console.log("eagle1.beak:", eagle1.fur)
var eagle2 = Object.create(bird);
console.log("eagle2:", eagle2.teeth)
var penguin = Object.create(bird);
penguin.teeth = "1 teeth";
console.log(penguin.teeth)
//creating class
class train{
    constructor(color, lightOn) {
        this.color = color,
     this.lightOn = lightOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
var firstTrain = new train("red", false)
var secondTrain = new train('blue', false);
var thirdTrain = new train('blue', false);
console.log(firstTrain,secondTrain,thirdTrain);
var train4 = new train('red', false);
console.log(train4.toggleLights());
console.log(train4.lightsStatus())
console.log(train4.getSelf());
console.log(train4.getPrototype);
class HighSpeedTrain extends train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
       toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
     toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}


var train5 = new train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
console.log(train5);
console.log(highSpeed1); //HighSpeedTrain {color: 'green',lightOn: false,passengers: 200,highSpeedOn: false}
console.log(train5.toggleLights())
console.log(train5.lightsStatus())
console.log(train5.getPrototype());
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //
//default parameter
function noDefaultParams(number) {
    console.log('Result:', number * number)
}
noDefaultParams();//NaN
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams()//100
class NoDefaultParams1 {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
    
}
var fail = new NoDefaultParams1(1, 2, 3, false);
var pass = new NoDefaultParams1(1, 0,0, true)
console.log(fail.calculate()); 
console.log(pass.calculate()); 
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
                this.energy += 10;

    }
    doSomethingFun() {
                this.energy -= 10;

    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100,xp = 0, hourlyWage = 10) {
        super(name, age, energy);
         this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
goToWork(){
    this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var newIntern = new Worker("Bob", 21, 110, 0, 10);
    newIntern.goToWork();
    return newIntern;
}

// Task 4: Code a manager object, methods
function manager() {
    var  newManager = new Worker("Alice", 30, 120, 100, 30);
    newManager.doSomethingFun();
    return newManager;
}


class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow
var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!
const car2 = {
   speed: 200,
color: "red"
}
console.log(Object.keys(car2))

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));