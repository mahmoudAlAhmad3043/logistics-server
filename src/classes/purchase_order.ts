import Product from "./product";
import PurchaseOrderStatus from "./purchase_order_status";

export default class PurchaseOrder{
    private _id:number;
    private _order_number:string;
    private _supplier_id:number;  // FK
    private _date:Date;
    private _currency:string;
    private _delivery_date:Date;
    private _status:PurchaseOrderStatus;
    private _notes:string;
    private _items: { product: Product, quantity: number, plts: number }[] = [];


    constructor(
        id: number,
        order_number: string,
        supplier_id: number,
        date: Date,
        currency: string,
        delivery_date: Date,
        status: PurchaseOrderStatus,
        notes: string
    ) {
        this._id = id;
        this._order_number = order_number;
        this._supplier_id = supplier_id;
        this._date = date;
        this._currency = currency;
        this._delivery_date = delivery_date;
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

    get_supplier_id(): number {
        return this._supplier_id;
    }

    set_supplier_id(value: number) {
        this._supplier_id = value;
    }

    get_date(): Date {
        return this._date;
    }

    set_date(value: Date) {
        this._date = value;
    }

    get_currency(): string {
        return this._currency;
    }

    set_currency(value: string) {
        this._currency = value;
    }

    get_delivery_date(): Date {
        return this._delivery_date;
    }

    set_delivery_date(value: Date) {
        this._delivery_date = value;
    }

    get_status(): PurchaseOrderStatus {
        return this._status;
    }

    set_status(value: PurchaseOrderStatus) {
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