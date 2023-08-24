"use strict";
// básico sobre interfaces
function example_01() {
    ;
    function greetWithHello(person) {
        console.log('Olá, ' + person.name + '!');
    }
    ;
    function changeName(person) {
        person.name = 'João';
    }
    ;
    const person = {
        name: "",
    };
    greetWithHello(person);
    changeName(person);
    greetWithHello(person);
    // example_01();
}
;
// interfaces e propriedades
function example_02() {
    ;
    function greetWithHello(person) {
        console.log('Olá, ' + person.name + '!');
    }
    ;
    function changeName(person) {
        person.name = 'João';
    }
    ;
    const person = {
        name: "Leonardo",
        age: 39,
    };
    greetWithHello(person);
    changeName(person);
    greetWithHello(person);
    greetWithHello({
        name: 'Jonas',
        age: 34,
        height: 1.70,
    });
    example_02();
}
;
// interfaces e métodos
function example_03() {
    ;
    function greetWithHello(person) {
        console.log('Olá, ' + person.name + '!');
    }
    ;
    function changeName(person) {
        person.name = 'João';
    }
    ;
    const person = {
        name: "Leonardo",
        age: 39,
        greet: function (lastname) {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age}`);
        },
    };
    greetWithHello(person);
    changeName(person);
    greetWithHello(person);
    person.greet('Oliveira');
    // example_03();
}
;
// Usando Interfaces com Classes
function example_04() {
    ;
    function greetWithHello(person) {
        console.log('Olá, ' + person.name + '!');
    }
    ;
    function changeName(person) {
        person.name = 'João';
    }
    ;
    const person = {
        name: "Leonardo",
        age: 39,
        greet: function (lastname) {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age} anos`);
        },
    };
    greetWithHello(person);
    changeName(person);
    greetWithHello(person);
    person.greet('Oliveira');
    class Client {
        constructor() {
            this.name = '';
            this.lastPurchase = new Date;
        }
        greet(lastname) {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age} anos`);
        }
        ;
    }
    ;
    const myClient = new Client();
    myClient.name = 'Juca';
    myClient.age = 28;
    greetWithHello(myClient);
    myClient.greet('Santos');
    console.log(myClient.lastPurchase);
    example_04();
}
;
// Interfaces e Tipo Função
function example_05() {
    ;
    function greetWithHello(person) {
        console.log('Olá, ' + person.name + '!');
    }
    ;
    function changeName(person) {
        person.name = 'João';
    }
    ;
    const person = {
        name: "Leonardo",
        age: 39,
        greet: function (lastname) {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age} anos`);
        },
    };
    greetWithHello(person);
    changeName(person);
    greetWithHello(person);
    person.greet('Oliveira');
    class Client {
        constructor() {
            this.name = '';
            this.lastPurchase = new Date;
        }
        greet(lastname) {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age} anos`);
        }
        ;
    }
    ;
    const myClient = new Client();
    myClient.name = 'Juca';
    myClient.age = 28;
    greetWithHello(myClient);
    myClient.greet('Santos');
    console.log(myClient.lastPurchase);
    ;
    let pow;
    pow = function (base, exp) {
        // return Math.pow(base, exp);
        // return base ** exponent;
        /*
            Array(exp)  -> quantidade de elementos baseado no 'expo'
            .fill(base) -> preenche todos os indices com o valor 'base'
            .reduce((t, a) => t * a); -> multiplica cada elemento por eles mesmo.
        */
        return Array(exp).fill(base).reduce((base, exp) => base * exp);
    };
    console.log(pow(2, 2));
    console.log(Math.pow(2, 2));
    console.log(2 ** 2);
}
;
example_05();
