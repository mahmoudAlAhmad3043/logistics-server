import Product from "./product";

export default class Car {
    private _id: number;
    private _car_number: string;
    private _start_date_parking: Date;
    private _end_date_parking: Date;
    private _notes: string;
    private _items: { product: Product, quantity: number, plts: number }[] = [];


    constructor(
        id: number,
        car_number: string,
        start_date_parking: Date,
        end_date_parking: Date,
        notes: string
    ) {
        this._id = id;
        this._car_number = car_number;
        this._start_date_parking = start_date_parking;
        this._end_date_parking = end_date_parking;
        this._notes = notes;
    }

    get_id(): number {
        return this._id;
    }

    set_id(id: number) {
        this._id = id;
    }

    get_car_number(): string {
        return this._car_number;
    }

    set_car_number(car_number: string) {
        this._car_number = car_number;
    }

    get_start_date_parking(): Date {
        return this._start_date_parking;
    }

    set_start_date_parking(start_date_parking: Date) {
        this._start_date_parking = start_date_parking;
    }

    get_end_date_parking(): Date {
        return this._end_date_parking;
    }

    set_end_date_parking(end_date_parking: Date) {
        this._end_date_parking = end_date_parking;
    }

    get_notes(): string {
        return this._notes;
    }

    set_notes(notes: string) {
        this._notes = notes;
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