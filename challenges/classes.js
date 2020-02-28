// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid2.volume()); // 100
// console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CuboidMaker2 {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume = function() {
        return this.length * this.width * this.height;
    }

    surfaceArea = function() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }

}



const cuboid2 = new CuboidMaker2(4,5,5);

console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

//STRETCH
class CubeMaker extends CuboidMaker2 {
    constructor(length, width, height) {
        super(length, width, height)
    }

    volume = function() {
        return Math.pow(this.length, 3);
    }

    surfaceArea = function() {
        return 6 * Math.pow(this.length, 2);
    }
}

const cube = new CubeMaker(4,4,4);




console.log(cube.volume()); //64
console.log(cube.surfaceArea()); //96


