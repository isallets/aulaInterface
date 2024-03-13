import { Animal } from "./Animal";
export class Mamifero implements Animal{
    acorda(): number {
        return 2;
    }
    dorme(): number {
        return 4;
    }
}