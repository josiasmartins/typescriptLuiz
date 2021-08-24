/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)

let nome: string = 'Luiz';  //Qualquer tipo de string: '' "" ``
let idade: number = 30;     //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true  //true ou false
let simbolo: symbol = Symbol('qualquer symbol'); //symbol
//let big: bigint = 10n;      //bigint

// Arrays
let arraysNumber: Array<number> = [1, 2, 3];
let arraysString: Array<string> = ["a", "b", "c"]
let arraysNumber2: number[] = [1, 2, 3];
let arraysString2: string[] = ["a", "b", "c"]

// Objetos
let people: {name: string, idade: number, adult?: boolean} = {
  name: 'Maria',
  idade: 49
}

// Funções
function soma(x: number, y: number): number {
  return x + y;
};
const soma2: (x: number, y: number) =>  number = (x, y) => x+y;

