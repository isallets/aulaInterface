"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ave_1 = require("./Ave");
const Mamifero_1 = require("./Mamifero");
function zoologicoTop(animal) {
    console.log(`O animal acordou ${animal.acorda()}`);
    console.log(`O animal dormiu ${animal.dorme()}`);
}
const ave = new Ave_1.Ave();
const mamifero = new Mamifero_1.Mamifero();
console.log(zoologicoTop(ave));
console.log(zoologicoTop(mamifero));
