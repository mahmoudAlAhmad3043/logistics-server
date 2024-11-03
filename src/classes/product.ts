import Category from "./category"
import Unit from "./unit"
import Status from "./status"

export default class Product{
  private id:number  //pk
  private code:string
  private brand:string
  private category:Category|string
  private description:string
  private origin_country:string
  private pro_date:Date
  private exp_date:Date
  private unit:Unit|string
  private packing_size:string
  private status:Status
  private notes:string
  private cost:number
  private price:number
  private currency:string
  private hs_code:string
  private bar_code:string
  private purchase_inv_number:string

  constructor(id:number,code:string,brand:string,category:Category|string,description:string,origin_country:string,pro_date:Date,exp_date:Date,unit:Unit|string,packing_size:string,status:Status,notes:string,cost:number,price:number,hs_code:string,bar_code:string,purchase_inv_number:string,currency:string){
    this.id = id;
    this.code = code;
    this.brand = brand;
    this.category = category;
    this.description = description;
    this.origin_country = origin_country;
    this.pro_date = pro_date;
    this.exp_date = exp_date;
    this.unit = unit;
    this.packing_size = packing_size;
    this.status = status;
    this.notes = notes;
    this.cost = cost;
    this.price = price;
    this.currency = currency;
    this.hs_code = hs_code;
    this.bar_code = bar_code;
    this.purchase_inv_number = purchase_inv_number;
  }

  // Getters
  get_id(): number {
    return this.id;
  }

  get_code(): string {
    return this.code;
  }

  get_brand(): string {
    return this.brand;
  }

  get_category(): Category|string {
    return this.category;
  }

  get_description(): string {
    return this.description;
  }

  get_origin_country(): string {
    return this.origin_country;
  }

  get_pro_date(): Date {
    return this.pro_date;
  }

  get_exp_date(): Date {
    return this.exp_date;
  }

  get_unit(): Unit|string {
    return this.unit;
  }

  get_packing_size(): string {
    return this.packing_size;
  }

  get_status(): Status {
    return this.status;
  }

  get_notes(): string {
    return this.notes;
  }

  get_cost(): number {
    return this.cost;
  }

  get_price(): number {
    return this.price;
  }

  get_currency(): string {
    return this.currency;
  }

  get_hs_code(): string {
    return this.hs_code;
  }

  get_bar_code(): string {
    return this.bar_code;
  }

  get_purchase_inv_number(): string {
    return this.purchase_inv_number;
  }

  // Setters
  set_id(value: number) {
    this.id = value;
  }

  set_code(value: string) {
    this.code = value;
  }

  set_brand(value: string) {
    this.brand = value;
  }

  set_category(value: Category|string) {
    this.category = value;
  }

  set_description(value: string) {
    this.description = value;
  }

  set_origin_country(value: string) {
    this.origin_country = value;
  }

  set_pro_date(value: Date) {
    this.pro_date = value;
  }

  set_exp_date(value: Date) {
    this.exp_date = value;
  }

  set_unit(value: Unit|string) {
    this.unit = value;
  }

  set_packing_size(value: string) {
    this.packing_size = value;
  }

  set_status(value: Status) {
    this.status = value;
  }

  set_notes(value: string) {
    this.notes = value;
  }

  set_cost(value: number) {
    this.cost = value;
  }

  set_price(value: number) {
    this.price = value;
  }

  set_currency(value: string) {
    this.currency = value;
  }

  set_hs_code(value: string) {
    this.hs_code = value;
  }

  set_bar_code(value: string) {
    this.bar_code = value;
  }

  set_purchase_inv_number(value: string) {
    this.purchase_inv_number = value;
  }
}


