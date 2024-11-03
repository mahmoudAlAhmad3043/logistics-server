import Product from "./product";


export default class Container{
    private _id: number;
    private _container_number: string;
    private _container_type: string;
    private _bill_of_lading: string; // Assuming FK refers to a foreign key related to another entity
    private _items: { product: Product, quantity: number, plts: number }[] = [];
    constructor(id: number, container_number: string, container_type: string, bill_of_lading: string) {
        this._id = id;
        this._container_number = container_number;
        this._container_type = container_type;
        this._bill_of_lading = bill_of_lading;
    }

    get_id(): number {
        return this._id;
    }

    set_id(value: number) {
        this._id = value;
    }

    get_container_number(): string {
        return this._container_number;
    }

    set_container_number(value: string) {
        this._container_number = value;
    }

    get_container_type(): string {
        return this._container_type;
    }

    set_container_type(value: string) {
        this._container_type = value;
    }

    get_bill_of_lading(): string {
        return this._bill_of_lading;
    }

    set_bill_of_lading(value: string) {
        this._bill_of_lading = value;
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