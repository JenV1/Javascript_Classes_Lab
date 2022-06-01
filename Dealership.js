
class Dealership {
    constructor(name, maxCarsItCanContain, carsInStock) {
        this.name = name;
        this.maxCarsItCanContain = maxCarsItCanContain;
        this.carsInStock = carsInStock;
    }

    countCarsInStock() {
        return this.carsInStock.length;
    }

    addCarToStock(car) {
        this.carsInStock.push(car);
    }
}




module.exports = Dealership;