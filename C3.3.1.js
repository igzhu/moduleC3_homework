// Практика С3.3 задание 1.
// В комментариях - обьеты и код для проверки работы функции.
// This is a ptactice for JS OOP paradigm with code to run it.

// let sampleObject = {
//   name : "123",
//   "login" : "qwer",
//   streetNumber : 1234,
// }

// const childObject = Object.create(sampleObject);
// childObject.ownLogin = "pred";
// childObject.ownTown = "WestWood"
// childObject.ownRegionIndex = 3214

function enumerateObjectOwnProps (someObject) {
    for (let key in someObject) {
        if (someObject.hasOwnProperty(key)) {
            console.log(key + " : " + someObject[key])
        }
    }   
}

// console.log("===========Parent===============");
// enumerateObjectOwnProps(sampleObject);
// console.log("===========Child===============");
// enumerateObjectOwnProps(childObject);