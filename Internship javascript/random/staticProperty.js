class Fruit{
    static count = 0;
    constructor() {
        return Fruit.count++;
    }
}
let apple = new Fruit();
console.log(Fruit.count)
let pear = new Fruit();
console.log(Fruit.count)