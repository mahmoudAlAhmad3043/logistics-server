import Product from "./product";


export default class Plain{
    private _id: number; // Assuming PK represents a primary key
    private _air_way_bill: string;
    private _plain_name: string;
    private _items: { product: Product, quantity: number, plts: number }[] = [];

    constructor(id: number, air_way_bill: string, plain_name: string) {
        this._id = id;
        this._air_way_bill = air_way_bill;
        this._plain_name = plain_name;
    }

    get_id(): number {
        return this._id;
    }

    set_id(value: number) {
        this._id = value;
    }

    get_air_way_bill(): string {
        return this._air_way_bill;
    }

    set_air_way_bill(value: string) {
        this._air_way_bill = value;
    }

    get_plane_name(): string {
        return this._plain_name;
    }

    set_plane_name(value: string) {
        this._plain_name = value;
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