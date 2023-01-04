// Практика С3.5

// This is a ptactice for JS OOP paradigm with code to run it. 
// OOP in JawaScript by means of classes.


class ElectricDevice {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isTurnedOn = false;
  }
  
  turnOn() {
    console.log(`Устройство ${this.name} включено.`);
    this.isTurnedOn = true;
  }

  turnOff() {
    console.log(`Устройство ${this.name} выключено.`);
    this.isTurnedOn = false;
  }
}


class Radiator extends ElectricDevice {
  constructor(name, type, power, design) {
    super(name, power);
    this.type = type; 
    this.design = design;
    this.isTurnedOn = false;
  }
    
  increasePower(numOfWatts) {
    this.power += numOfWatts;
    console.log(`Мощность увеличена до ${this.power}`);
  }
     
  decreasePower(numOfWatts) {
    this.power -= numOfWatts;
    console.log(`Мощность уменьшена до ${this.power}`);
  }
}


class Computer extends ElectricDevice {
  constructor(name, type, power, manufacturer) {
    super(name, power);
    this.type = type;
    this.manufacturer = manufacturer;
    this.state = "on";
    this.isTurnedOn = true;
  }
  
  moveToSleepMode() {
    console.log(this.name + " в \'спящем\' режиме");
    this.state = "sleep";
  }
  
  restoreFromSleepMode() {
    console.log(this.name + " в \'рабочем\' режиме");
    this.state = "on";
  }
}


class Lamp extends ElectricDevice {
  constructor(name, type, power) {
    super(name, power);
    this.type = type;
    this.state = "off";
    this.pluggedIn = true;
    this.isTurnedOn = false;
  }
  
  switchOff() {
    console.log(this.name + " выключена.");
    this.state = "off";
  }
  
  switchOn() {
    console.log(this.name + " включена.");
    this.state = "on";
  }
}


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



