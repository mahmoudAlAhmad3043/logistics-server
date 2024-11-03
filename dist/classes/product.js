"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, code, brand, category, description, origin_country, pro_date, exp_date, unit, packing_size, status, notes, cost, price, unit_price, hs_code, bar_code, purchase_inv_id) {
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
        this.unit_price = unit_price;
        this.hs_code = hs_code;
        this.bar_code = bar_code;
        this.purchase_inv_id = purchase_inv_id;
    }
    // Getters
    get_id() {
        return this.id;
    }
    get_code() {
        return this.code;
    }
    get_brand() {
        return this.brand;
    }
    get_category() {
        return this.category;
    }
    get_description() {
        return this.description;
    }
    get_origin_country() {
        return this.origin_country;
    }
    get_pro_date() {
        return this.pro_date;
    }
    get_exp_date() {
        return this.exp_date;
    }
    get_unit() {
        return this.unit;
    }
    get_packing_size() {
        return this.packing_size;
    }
    get_status() {
        return this.status;
    }
    get_notes() {
        return this.notes;
    }
    get_cost() {
        return this.cost;
    }
    get_price() {
        return this.price;
    }
    get_unit_price() {
        return this.unit_price;
    }
    get_hs_code() {
        return this.hs_code;
    }
    get_bar_code() {
        return this.bar_code;
    }
    get_purchase_inv_id() {
        return this.purchase_inv_id;
    }
    // Setters
    set_id(value) {
        this.id = value;
    }
    set_code(value) {
        this.code = value;
    }
    set_brand(value) {
        this.brand = value;
    }
    set_category(value) {
        this.category = value;
    }
    set_description(value) {
        this.description = value;
    }
    set_origin_country(value) {
        this.origin_country = value;
    }
    set_pro_date(value) {
        this.pro_date = value;
    }
    set_exp_date(value) {
        this.exp_date = value;
    }
    set_unit(value) {
        this.unit = value;
    }
    set_packing_size(value) {
        this.packing_size = value;
    }
    set_status(value) {
        this.status = value;
    }
    set_notes(value) {
        this.notes = value;
    }
    set_cost(value) {
        this.cost = value;
    }
    set_price(value) {
        this.price = value;
    }
    set_unit_price(value) {
        this.unit_price = value;
    }
    set_hs_code(value) {
        this.hs_code = value;
    }
    set_bar_code(value) {
        this.bar_code = value;
    }
    set_purchase_inv_id(value) {
        this.purchase_inv_id = value;
    }
}
exports.default = Product;
