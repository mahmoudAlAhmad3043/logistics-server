import Product from "./product";
import ReceiveStatus from "./receive_status";



export default class StockReceive {
    private _id: number;
    private _ref_number: string;
    private _shipment_id: number;  //FK
    private _store_id: number;  //FK
    private _receipt_date: Date;
    private _notes: string;
    private _status: ReceiveStatus;
    private _release_id:number;   // FK
    private _items: { product: Product, quantity: number, plts: number }[] = [];


    constructor(
        id: number,
        ref_number: string,
        shipment_id: number,
        store_id: number,
        receipt_date: Date,
        notes: string,
        status: ReceiveStatus,
        release_id:number
    ) {
        this._id = id;
        this._ref_number = ref_number;
        this._shipment_id = shipment_id;
        this._store_id = store_id;
        this._receipt_date = receipt_date;
        this._notes = notes;
        this._status = status;
        this._release_id = release_id;
    }

    get_id(): number {
        return this._id;
    }

    set_id(id: number) {
        this._id = id;
    }

    get_ref_number(): string {
        return this._ref_number;
    }

    set_ref_number(ref_number: string) {
        this._ref_number = ref_number;
    }

    get_shipment_id(): number {
        return this._shipment_id;
    }

    set_shipment_id(shipment_id: number) {
        this._shipment_id = shipment_id;
    }

    get_store_id(): number {
        return this._store_id;
    }

    set_store_id(store_id: number) {
        this._store_id = store_id;
    }

    get_receipt_date(): Date {
        return this._receipt_date;
    }

    set_receipt_date(receipt_date: Date) {
        this._receipt_date = receipt_date;
    }


    get_notes(): string {
        return this._notes;
    }

    set_notes(notes: string) {
        this._notes = notes;
    }

    get_status(): ReceiveStatus {
        return this._status;
    }

    set_status(status: ReceiveStatus) {
        this._status = status;
    }

    get_release_id(): number {
        return this._release_id;
    }

    set_release_id(release_id: number){
        this._release_id = release_id;
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