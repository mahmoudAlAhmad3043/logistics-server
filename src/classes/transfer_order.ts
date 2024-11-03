import Product from "./product";
import TransferOrderStatus from "./transfer_order_status";

export default class TransferOrder{
    private _id:number;
    private _order_number:string;
    private _date:Date;
    private _source:string;
    private _destination:string;
    private _status:TransferOrderStatus;
    private _notes:string;
    private _items: { product: Product, quantity: number, plts: number }[] = [];


    constructor(
        id: number,
        order_number: string,
        date: Date,
        source: string,
        destination: string,
        status: TransferOrderStatus,
        notes: string
    ) {
        this._id = id;
        this._order_number = order_number;
        this._date = date;
        this._source = source;
        this._destination = destination;
        this._status = status;
        this._notes = notes;
    }

    get_id(): number {
        return this._id;
    }

    set_id(value: number) {
        this._id = value;
    }

    get_order_number(): string {
        return this._order_number;
    }

    set_order_number(value: string) {
        this._order_number = value;
    }

    get_date(): Date {
        return this._date;
    }

    set_date(value: Date) {
        this._date = value;
    }

    get_source(): string {
        return this._source;
    }

    set_source(value: string) {
        this._source = value;
    }

    get_destination(): string {
        return this._destination;
    }

    set_destination(value: string) {
        this._destination = value;
    }

    get_status(): TransferOrderStatus {
        return this._status;
    }

    set_status(value: TransferOrderStatus) {
        this._status = value;
    }

    get_notes(): string {
        return this._notes;
    }

    set_notes(value: string) {
        this._notes = value;
    }

    add_item(product:Product,quantity:number,plts:number){
        this._items.push({"product":product,"quantity":quantity,"plts":plts})
    }
    remove_item(product:Product){
        this._items.splice(this._items.findIndex(obj => obj.product.get_id() === product.get_id()))
    }
    get_items():{ product: Product, quantity: number, plts: number }[]{
        return this._items;
    }
    clear_items():void{
        this._items = [];
    }
}