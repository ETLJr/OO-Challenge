class Vehicle{
    constructor(make, model, year){
        this.make=make;
        this.model= model;
        this.year= year
    }
     honk(){
        return "Beep!"
    }
    toString(){
        return"`This vehicle is a ${this.year} ${this.make} ${this.model}`"
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
    super(make, model, year);
    this.numWheels=4
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels=2
    }
        revEngine(){
            return "VROOM!!!"
        
    }
}

class Garage{
    constructor(vehicles, capacity){
        this.vehicles =[];
        this.capacity =capacity
    }
    add(newVehicle){
        if(!(newVehice instanceof vehicles)){
            return "Only vehicles are allowed here!"
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle)
    }
}