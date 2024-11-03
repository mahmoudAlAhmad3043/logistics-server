import StockReceive from "./classes/stock_receive";
import ReceiveStatus from "./classes/receive_status";
import Plain from "./classes/plain";
import Product from "./classes/product";
import Unit from "./classes/unit";
import Status from "./classes/status"
import { now } from "moment";
let d : Date = new Date()


let plain = new Plain(1,"air1","a");
let p = new Product(1,"d","s","dray","sdsd","denmark",d,d,Unit.kg,"10*2gm","canceled","sss",23,23,"sds","sdsds","323","aed")
let obj = {
    "product":p,
    "quantity":10,
    "plts":1
}


plain.add_item(p,10,1)

console.log(plain.get_items())

plain.remove_item(p)

console.log(plain.get_items())



let arr:{name: string, age:number,student:boolean}[] = []
let ar2:{name: string, age:number,student:boolean}[] = []

arr.push({name:"mahmoud",age:24,student:true},{name:"ahmad",age:26,student:false},{name:"ali",age:23,student:true})
let index:number = arr.findIndex(obj => obj.age > 23)
console.log(arr[index])

ar2 = arr.map(obj=>{
    return {name:obj.name,age:obj.age+1,student:obj.student}
})
console.log(ar2);

let f:number[] = [1,3,4];