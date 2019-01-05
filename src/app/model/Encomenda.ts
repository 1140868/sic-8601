import { Produto } from './Produto';
import { Fabrica } from './fabrica';

export class Encomenda {
    order_products: [Produto];
    order_state: String;
    _id: String;
    id: String;
    order_morada: String;
    order_Factorie: Fabrica;
    order_date: Date;
    __v: Number;
    order_long: Number;
    order_lat: Number;
    order_cost: Number;
    order_userID: Number;
} 