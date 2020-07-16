class Vehicle {
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
getHonk() {
    return 'BEEP';
   
}

toString() {
    return `this vehivle is a ${this.make} ${this.model} from ${this.year}`;
 }
}

class Car extends Vehicle {
    constructor(make, model, year){
    super(make, model, year)
    }
    numWheels() { 
        return 4;
    }
}

let blue = new Car('Isuzu', 'Oasis', 1997)

class Motorcycle extends Vehicle {
    constructor(make,model,year){
        super(make,model, year)
    }
     numWheels(){
         return 2;
     }
     revEngine(){
         return "VROOM!!";
     }
}

let black = new Motorcycle('Suzuki', 'Hayabusa', '1997')

class Garage {
    vehicles = [];
    capacity = 3;
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "This is not a vehicle";
        }
        if(this.vehicles.length < this.capacity){
        this.vehicles.push(newVehicle);
        } else {
            return "This garage is at capacity";
        }
    }
}

