import Container from "./container";
import Product from "./product";


export default class Ship{
    private _id: number;
    private _bill_of_lading: string;
    private _ship_name: string;
    private _items: { product: Product, quantity: number, plts: number }[] = [];
    private _containers:Container[] = [];

    constructor(id: number, bill_of_lading: string, ship_name: string) {
        this._id = id;
        this._bill_of_lading = bill_of_lading;
        this._ship_name = ship_name;
    }

    get_id(): number {
        return this._id;
    }

    set_id(value: number) {
        this._id = value;
    }

    get_bill_of_lading(): string {
        return this._bill_of_lading;
    }

    set_bill_of_lading(value: string) {
        this._bill_of_lading = value;
    }

    get_ship_name(): string {
        return this._ship_name;
    }

    set_ship_name(value: string) {
        this._ship_name = value;
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
    add_container(container:Container){
        this._containers.push(container)
    }
    remove_container(container:Container){
        this._containers.splice(this._containers.findIndex(obj => obj.get_id() === container.get_id()))
    }
    get_containers():Container[]{
        return this._containers
    }
    clear_containers():void{
        this._containers = []
    }
}