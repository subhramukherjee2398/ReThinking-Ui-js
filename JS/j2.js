// Object Immutability In JavaScript

//1.Object.preventExtensions();
// can't add a new property to the object.

let objData = {
  name: "Subhra",
  age: 20,
  city: "kol",
};

Object.preventExtensions(objData);

objData.roll = 100;

console.log(objData.roll); // undefined ,  in strict mode it will throw type error;

// but,

//=> we can mpodify existence property

objData.age = 24;
console.log(objData.age);

//=> add configuration property

/* Object.defineProperties(objData,"age",{
 writable : false,
 enumrable : false,
 configurable : false
})
 */
//=> delete a existing property

delete objData.city;

console.log(objData);

// ---------------- LIST ----------------//

//          Method    |     ADD new Property   |   Modify existing Property   |  delete a property

//  preventExtension  |       NO                |         YES                 |     YES

//    seal            |        NO               |        YES                  |      NO

// freeze             |         NO              |         NO                  |      NO
