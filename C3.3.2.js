// Практика С3.3 задание 2.
// В комментариях - обьекты и код для проверки работы функции.
// This is a ptactice (checking the property presence  in the object) for JS OOP paradigm with code to run it.


// let sampleObject = {
//   name : "123",
//  "login" : "qwer",
//  streetNumber : 1234,
// }


function checkObjectHasProp(someString, someObject) {
  return(someString in someObject);
}

// console.log(checkObjectHasProp("name", sampleObject));
// console.log(checkObjectHasProp("unknownProperty", sampleObject));