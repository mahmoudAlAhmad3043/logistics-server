import Product from './product';
import ReleasedStatus from './release_status'


export default class StockRelease {
    private _id: number;
    private _ref_number: string;
    private _shipment_id: number;
    private _store_id: number;
    private _release_date: Date;
    private _notes: string;
    private _status: ReleasedStatus;
    private _items: { product: Product, quantity: number, plts: number }[] = [];


    constructor(
        id: number,
        ref_number: string,
        shipment_id: number,
        store_id: number,
        release_date: Date,
        notes: string,
        status: ReleasedStatus
    ) {
        this._id = id;
        this._ref_number = ref_number;
        this._shipment_id = shipment_id;
        this._store_id = store_id;
        this._release_date = release_date;
        this._notes = notes;
        this._status = status;
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

    get_release_date(): Date {
        return this._release_date;
    }

    set_release_date(release_date: Date) {
        this._release_date = release_date;
    }



    get_notes(): string {
        return this._notes;
    }

    set_notes(notes: string) {
        this._notes = notes;
    }

    get_status(): ReleasedStatus {
        return this._status;
    }

    set_status(status: ReleasedStatus) {
        this._status = status;
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