// Практика С3.3 задание 3.
// В комментариях - обьекты и код для проверки работы функции.
// This is a ptactice (creating object without prototype) for JS OOP paradigm with code to run it.


function createObjectWithoutPototype() {
  return Object.create(null);
}

// console.log(createObjectWithoutPototype().__proto__); output: undefined