"use strict";


function Car(brand, model, type, cc) {
    var _brand = brand;
    var _model = model;
    var _type = type;
    var _cc = cc;

    this.getBrand = () => _brand;

    this.setBrand = value => _brand = value;

    this.getModel = () => _model;

    this.setModel = value => _model = value;

    this.getType = () => _type;

    this.setType = value => _type = value;

    this.getCc = () => _cc;

    this.setCc = value => _cc = value;
}


let car1 = new Car("Honda", "Civic", "Sedan", 2000); //
let car2 = new Car("Fiat", "Panda", "Hatchback", 1600); //
let car3 = new Car("Subaru", "Impreza", "Sedan", 3500);
let car4 = new Car("Ferrari", "SP38", "Supercar", 3900);
let car5 = new Car("Volkswagen", "Golf", "Hatchback", 1800); //
let car6 = new Car("Honda", "S2000", "Roadster", 2200); //
let car7 = new Car("BMW", "M5", "Sedan", 4400);
let car8 = new Car("Volkswagen", "Touareg", "SUV", 4130);
let car9 = new Car("Ford", "Focus", "Hatchback", 2000); //
let car10 = new Car("Bugatti", "Chiron", "Supercar", 6000);


let cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];


function getCarInfo() {
    console.log(this.getBrand() + " " + this.getModel() + " is a " + this.getType() + " and it can wrooom with its " + this.getCc() + "cc engine.");
}


function getCars(cars) {
    cars.forEach(car => {
        if (car.getCc() >= 3000) {
            getCarInfo.call(car);
        }
    });
}


getCars(cars);