"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stock_receive_1 = __importDefault(require("./classes/stock_receive"));
const receive_status_1 = __importDefault(require("./classes/receive_status"));
let d = new Date();
const sr = new stock_receive_1.default(1, 'r1', 1, 1, 1, d, 5, 2, 'dd', receive_status_1.default.RECEIVED, 1);
console.log(sr);
sr.set_id(2);
console.log(sr.get_id());
