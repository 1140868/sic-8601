import { Finish } from './Finish';

export class Material {
    id: Number;
    name: String;
    description: String;
    preco:Number;
    data:Date;
    finishes: [Finish];
}