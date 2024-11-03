"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_js_1 = __importDefault(require("./db.js"));
db_js_1.default.schema.createTable('stores', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('location');
    table.string('email_1');
    table.string('email_2');
    table.string('phone');
    table.string('mobile');
    table.string('notes');
})
    .then(() => {
    return db_js_1.default.schema.createTable('', (table) => {
    });
});
