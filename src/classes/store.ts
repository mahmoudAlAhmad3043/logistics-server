import Time from "./time"
import Status from "./status"
import StockReceive from "./stock_receive"
import Product from "./product"
import StockRelease from "./stock_release"
import StockDestruction from "./stock_destruction"

export default class Patient {
  private id:number
  private name:string
  private location: string
  private email_1: string
  private email_2: string
  private phone: string
  private mobile: string
  private notes:string

  constructor(id:number,name:string,location:string,email_1:string,email_2:string,phone:string,mobile:string,notes:string){
    this.id = id
    this.name = name
    this.location = location
    this.email_1 = email_1
    this.email_2 = email_2
    this.phone = phone
    this.mobile = mobile
    this.notes = notes
  }

  // get
  get_id():number{
    return this.id; 
  }
  get_name():string{
    return this.name;
  }
  get_location():string{
    return this.location;
  }
  get_email_1():string{
    return this.email_1
  }
  get_email_2():string{
    return this.email_2
  }
  get_phone():string{
    return this.phone
  }
  get_mobile():string{
    return this.mobile
  }
  get_notes():string{
    return this.notes;
  }
  // set
  set_name(name:string):void{
    this.name = name;
  }
  set_location(location:string):void{
    this.location = location
  }
  set_email_1(email:string):void{
    this.email_1 = email
  }
  set_email_2(email:string):void{
    this.email_2 = email
  }
  set_phone(phone:string):void{
    this.phone = phone
  }
  set_mobile(mobile:string):void{
    this.mobile = mobile
  }
  set_notes(notes:string):void{
    this.notes = notes;
  }

  receive(stock_receive:StockReceive,product:Product,received_quantity:number,plts:number,notes:string){
   return {
    "stock_receive":stock_receive,
    "product":product,
    "recived_quantity":received_quantity,
    "plts":plts,
    "notes":notes
   } 
  }

  release(stock_release:StockRelease,product:Product,released_quantity:number,plts:number,notes:string){
    return {
        "stock_release":stock_release,
        "product":product,
        "released_quantity":released_quantity,
        "plts":plts,
        "notes":notes
    }
  }
  desroy(stock_destruction:StockDestruction,product:Product,released_quantity:number,plts:number,notes:string){
    return {
        "stock_destruction":stock_destruction,
        "product":product,
        "released_quantity":released_quantity,
        "plts":plts,
        "notes":notes
    }
  }
}

