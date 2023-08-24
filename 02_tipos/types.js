"use strict";
// string
function example_01() {
    let name1 = 'Leonardo';
    console.log(name1);
    // example_01();
}
;
// number
function example_02() {
    let age = 39;
    age = 39.4;
    console.log(age);
    // example_02();
}
;
// boolean
function example_03() {
    let haveHobbies = false;
    console.log(haveHobbies);
    // example_03();
}
;
// tipos explícitos
function example_04() {
    let myAge;
    myAge = 39;
    console.log(typeof myAge);
    // example_04();
}
;
// array
function example_05() {
    let hoobies = ['Js', 'TS'];
    console.log(hoobies);
    console.log(typeof hoobies);
    hoobies = [100, 200];
    console.log(hoobies);
    console.log(typeof hoobies);
    // example_05();
}
;
// tuplas
function example_06() {
    let address = ['Rua A', 203, 'Fábricas', 'AP'];
    console.log(address);
    address = ['Rua B', 23, 'SJD', 'MTZ'];
    console.log(address);
    // example_06();
}
;
// enums
function example_07() {
    let Cor;
    (function (Cor) {
        Cor[Cor["Gray"] = 0] = "Gray";
        Cor[Cor["Green"] = 1] = "Green";
        Cor[Cor["Blue"] = 2] = "Blue";
    })(Cor || (Cor = {}));
    ;
    console.log(Cor);
    let myColor = Cor.Blue;
    console.log(myColor);
    // example_07();
}
;
// Any
function example_08() {
    let car = 'BMW';
    console.log(car);
    car = {
        brand: 'BMW',
        year: 2019,
    };
    console.log(car);
    // example_08();
}
;
