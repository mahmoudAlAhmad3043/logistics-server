import Product from "./product";


export default class DeliveryOrder{
    private _id: number; // Assuming PK represents a primary key
    private _invoice_number: string;
    private _order_number: string;
    private _customer_id: number; // Assuming FK refers to the ID of the related customer entity
    private _currency: string;
    private _date: Date;
    private _delivery_date: Date;
    private _notes: string;
    private _items: { product: Product, quantity: number, plts: number }[] = [];


    constructor(
        id: number,
        invoice_number: string,
        order_number: string,
        customer_id: number,
        currency: string,
        date: Date,
        delivery_date: Date,
        notes: string
    ) {
        this._id = id;
        this._invoice_number = invoice_number;
        this._order_number = order_number;
        this._customer_id = customer_id;
        this._currency = currency;
        this._date = date;
        this._delivery_date = delivery_date;
        this._notes = notes;
    }

    get_id(): number {
        return this._id;
    }

    set_id(value: number) {
        this._id = value;
    }

    get_invoice_number(): string {
        return this._invoice_number;
    }

    set_invoice_number(value: string) {
        this._invoice_number = value;
    }

    get_order_number(): string {
        return this._order_number;
    }

    set_order_number(value: string) {
        this._order_number = value;
    }

    get_customer_id(): number {
        return this._customer_id;
    }

    set_customer_id(value: number) {
        this._customer_id = value;
    }

    get_currency(): string {
        return this._currency;
    }

    set_currency(value: string) {
        this._currency = value;
    }

    get_date(): Date {
        return this._date;
    }

    set_date(value: Date) {
        this._date = value;
    }

    get_delivery_date(): Date {
        return this._delivery_date;
    }

    set_delivery_date(value: Date) {
        this._delivery_date = value;
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