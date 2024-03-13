import { Animal } from "./Animal";
import { Ave } from "./Ave";
import { Mamifero } from "./Mamifero";

function zoologicoTop(animal: Animal):void{
    console.log(`O animal acordou ${animal.acorda()}`);
    console.log(`O animal dormiu ${animal.dorme()}`);
}

const ave = new Ave();
const mamifero = new Mamifero();

console.log(zoologicoTop(ave));
console.log(zoologicoTop(mamifero));

 