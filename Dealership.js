
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

    returnAllCarManufacturers() {
        const manufacturers = this.carsInStock.map(element => element.manufacturer);
        return manufacturers;
    }

    findAllCarsWithCertainManufacturer(manufacturer) {
        return this.carsInStock.filter(element =>
             element.manufacturer === manufacturer);
    }
}




module.exports = Dealership;