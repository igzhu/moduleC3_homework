// Практика С3.4

// This is a ptactice for JS OOP paradigm with code to run it. 
// OOP in JawaScript by means of constructor function and prototype as inheritance.


function ElectricDevice(name, power){
  this.name = name;
  this.power = power;
  this.isTurnedOn = false;
}
  
ElectricDevice.prototype.turnOn = function(){
  console.log(`Устройство ${this.name} включено.`);
  this.isTurnedOn = true;
}

ElectricDevice.prototype.turnOff = function(){
  console.log(`Устройство ${this.name} выключено.`);
  this.isTurnedOn = false;
}

function Radiator(name, type, power, design){
  this.name = name;
  this.type = type;
  this.power = power;
  this.design = design;
  this.isTurnedOn = false;
  this.increasePower = function(numOfWatts){
    this.power += numOfWatts;
    console.log(`Мощность увеличена до ${this.power}`)
  };
  this.decreasePower = function(numOfWatts){
    this.power -= numOfWatts;
    console.log(`Мощность уменьшена до ${this.power}`)
  };
}

Radiator.prototype = new ElectricDevice();
  
function Computer(name, type, power, manufacturer){
  this.name = name;
  this.type = type;
  this.power = power;
  this.manufacturer = manufacturer;
  this.state = "on";
  this.isTurnedOn = true;
  this.moveToSleepMode = function(){
    console.log(this.name + " в \'спящем\' режиме");
    this.state = "sleep";
  }
  this.restoreFromSleepMode = function(){
    console.log(this.name + " в \'рабочем\' режиме");
    this.state = "on";
  }
}

Computer.prototype = new ElectricDevice();

function Lamp(name, type, power){
  this.name = name;
  this.type = type;
  this.power = power;
  this.state = "off";
  this.pluggedIn = true;
  this.switchOff = function(){
    console.log(this.name + " выключена.");
    this.state = "off";
  }
  this.switchOn = function(){
    console.log(this.name + " включена.");
    this.state = "on";
  }
}

Lamp.prototype = new ElectricDevice();

//проверка работы обьектов:

const myHeater = new Radiator("Электрокамин", "cx-12", 500, "масляный")
const myNotebook = new Computer("Ноутбук", "FR-321", 40, "ASUS")
const myLamp = new Lamp("Настольная лампа", "led", 45)

myHeater.turnOn();
myHeater.increasePower(300);
myHeater.decreasePower(150);
myNotebook.moveToSleepMode();
console.log(myNotebook.state);
myNotebook.turnOff();
myLamp.switchOn();

console.log(myHeater);
console.log(myNotebook);
console.log(myLamp);



