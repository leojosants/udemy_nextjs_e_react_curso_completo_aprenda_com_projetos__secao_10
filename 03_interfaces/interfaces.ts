// básico sobre interfaces
function example_01(): void {

    interface Human {
        name: string;
    };

    function greetWithHello(person: Human): void {
        console.log('Olá, ' + person.name + '!');
    };

    function changeName(person: Human): void {
        person.name = 'João';
    };

    const person: Human = {
        name: "",
    };

    greetWithHello(person);
    changeName(person);
    greetWithHello(person);
    // example_01();
};

// interfaces e propriedades
function example_02(): void {

    interface Human {
        name: string;
        age?: number;
        [props: string]: any, // permite receber dados dinamicos

    };

    function greetWithHello(person: Human): void {
        console.log('Olá, ' + person.name + '!');
    };

    function changeName(person: Human): void {
        person.name = 'João';
    };

    const person: Human = {
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
};

// interfaces e métodos
function example_03(): void {

    interface Human {
        name: string;
        age?: number;
        [props: string]: any; // permite receber dados dinamicos
        greet(lastname: string): void;
    };

    function greetWithHello(person: Human): void {
        console.log('Olá, ' + person.name + '!');
    };

    function changeName(person: Human): void {
        person.name = 'João';
    };

    const person: Human = {
        name: "Leonardo",
        age: 39,

        greet: function (lastname: string): void {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age}`);
        },
    };

    greetWithHello(person);
    changeName(person);
    greetWithHello(person);
    person.greet('Oliveira');
    // example_03();
};

// Usando Interfaces com Classes
function example_04(): void {

    interface Human {
        name: string;
        age?: number;
        [props: string]: any; // permite receber dados dinamicos
        greet(lastname: string): void;
    };

    function greetWithHello(person: Human): void {
        console.log('Olá, ' + person.name + '!');
    };

    function changeName(person: Human): void {
        person.name = 'João';
    };

    const person: Human = {
        name: "Leonardo",
        age: 39,

        greet: function (lastname: string): void {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age} anos`);
        },
    };

    greetWithHello(person);
    changeName(person);
    greetWithHello(person);
    person.greet('Oliveira');

    class Client implements Human {
        [props: string]: any;
        name: string = '';
        age?: number | undefined;
        lastPurchase: Date = new Date;

        greet(lastname: string): void {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age} anos`);
        };
    };

    const myClient = new Client();
    myClient.name = 'Juca';
    myClient.age = 28;

    greetWithHello(myClient);

    myClient.greet('Santos');
    console.log(myClient.lastPurchase);

    example_04();
};

// Interfaces e Tipo Função
function example_05(): void {

    interface Human {
        name: string;
        age?: number;
        [props: string]: any; // permite receber dados dinamicos
        greet(lastname: string): void;
    };

    function greetWithHello(person: Human): void {
        console.log('Olá, ' + person.name + '!');
    };

    function changeName(person: Human): void {
        person.name = 'João';
    };

    const person: Human = {
        name: "Leonardo",
        age: 39,

        greet: function (lastname: string): void {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age} anos`);
        },
    };

    greetWithHello(person);
    changeName(person);
    greetWithHello(person);
    person.greet('Oliveira');

    class Client implements Human {
        [props: string]: any;
        name: string = '';
        age?: number | undefined;
        lastPurchase: Date = new Date;

        greet(lastname: string): void {
            console.log(`Olá, me chamo ${this.name} ${lastname} e tenho ${this.age} anos`);
        };
    };

    const myClient = new Client();
    myClient.name = 'Juca';
    myClient.age = 28;

    greetWithHello(myClient);

    myClient.greet('Santos');
    console.log(myClient.lastPurchase);

    interface CalculateFunction {
        (a: number, b: number): number;
    };

    let pow: CalculateFunction;

    pow = function (base: number, exp: number): number {
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
};

example_05();