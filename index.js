"use strict";
let myname;
myname = null;
console.log(myname);
myname = "Usman";
console.log(myname);
//myname = undefined; //Error
//myname = 12; //Error
let myAge;
myAge = 19; //narrowing
console.log(myAge);
//console.log(myAge.toLowerCase());//Error
myAge = "Nighteen Years Old"; //narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types 
//can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string 
//because of narrowing
let newAge = Math.random() > 0.6 ? "Saeed" : 30;
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Saeed") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
console.log("newAge", newAge);
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
let f_age;
f_age = 90; //OK
console.log("f_age", f_age);
f_age = "died"; //OK
f_age = "unknown"; //OK
//age = "living";//Error
let usman;
usman = "usman";
console.log(usman);
// usman = "saeed";//Error
let yourName = Math.random() > 0.6 ? "Ahmad Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); //OK
console.log("yourName is:", yourName);
let data;
