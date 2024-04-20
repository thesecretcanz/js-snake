class Car {
    constructor(carModel, carYear) {
        this.name = carModel;
        this.carYear = carYear;
    }
}

myCar = new Car("Fiat Panda", "2003")

document.getElementById("text").innerHTML = myCar.name + " " + myCar.carYear;