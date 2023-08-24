// string
function example_01(): void {
    let name1: string = 'Leonardo';
    console.log(name1);
    // example_01();
};

// number
function example_02(): void {
    let age: number = 39;
    age = 39.4;

    console.log(age);
    // example_02();
};

// boolean
function example_03(): void {
    let haveHobbies: boolean = false;
    console.log(haveHobbies);
    // example_03();
};

// tipos explícitos
function example_04(): void {
    let myAge: number;
    myAge = 39;

    console.log(typeof myAge);
    // example_04();
};

// array
function example_05(): void {
    let hoobies: any[] = ['Js', 'TS'];

    console.log(hoobies);
    console.log(typeof hoobies);

    hoobies = [100, 200];

    console.log(hoobies);
    console.log(typeof hoobies);
    // example_05();
};

// tuplas
function example_06(): void {
    let address: [string, number, string, string] = ['Rua A', 203, 'Fábricas', 'AP'];

    console.log(address);

    address = ['Rua B', 23, 'SJD', 'MTZ'];

    console.log(address);
    // example_06();
};

// enums
function example_07(): void {
    enum Cor { Gray, Green, Blue };

    console.log(Cor);

    let myColor: Cor = Cor.Blue;

    console.log(myColor);
    // example_07();
};

// Any
function example_08(): void {
    let car: any = 'BMW';

    console.log(car);

    car = {
        brand: 'BMW',
        year: 2019,
    };

    console.log(car);
    // example_08();
};