import DestructionOrderStatus from "./destruction_order_status";
import Product from "./product";

export default class StockDestruction{
    private _id: number; // Assuming PK represents a primary key
    private _ref_number: string;
    private _shipment_id: number; // Assuming FK refers to the ID of the related shipment entity
    private _store_id: number; // Assuming FK refers to the ID of the related store entity
    private _destruction_date: Date;
    private _notes: string;
    private _status: DestructionOrderStatus;
    private _items: { product: Product, quantity: number, plts: number }[] = [];


    constructor(
        id: number,
        ref_number: string,
        shipment_id: number,
        store_id: number,
        destruction_date: Date,
        notes: string,
        status: DestructionOrderStatus
    ) {
        this._id = id;
        this._ref_number = ref_number;
        this._shipment_id = shipment_id;
        this._store_id = store_id;
        this._destruction_date = destruction_date;
        this._notes = notes;
        this._status = status;
    }

    get_id(): number {
        return this._id;
    }

    set_id(value: number) {
        this._id = value;
    }

    get_ref_number(): string {
        return this._ref_number;
    }

    set_ref_number(value: string) {
        this._ref_number = value;
    }

    get_shipment_id(): number {
        return this._shipment_id;
    }

    set_shipment_id(value: number) {
        this._shipment_id = value;
    }

    get_store_id(): number {
        return this._store_id;
    }

    set_store_id(value: number) {
        this._store_id = value;
    }

    get_destruction_date(): Date {
        return this._destruction_date;
    }

    set_destruction_date(value: Date) {
        this._destruction_date = value;
    }

    get_notes(): string {
        return this._notes;
    }

    set_notes(value: string) {
        this._notes = value;
    }

    get_status(): DestructionOrderStatus {
        return this._status;
    }

    set_status(value: DestructionOrderStatus) {
        this._status = value;
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