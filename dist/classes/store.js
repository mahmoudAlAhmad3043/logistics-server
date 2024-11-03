"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Patient {
    constructor(id, name, location, email_1, email_2, phone, mobile, notes) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.email_1 = email_1;
        this.email_2 = email_2;
        this.phone = phone;
        this.mobile = mobile;
        this.notes = notes;
    }
    // get
    get_id() {
        return this.id;
    }
    get_name() {
        return this.name;
    }
    get_location() {
        return this.location;
    }
    get_email_1() {
        return this.email_1;
    }
    get_email_2() {
        return this.email_2;
    }
    get_phone() {
        return this.phone;
    }
    get_mobile() {
        return this.mobile;
    }
    get_notes() {
        return this.notes;
    }
    // set
    set_name(name) {
        this.name = name;
    }
    set_location(location) {
        this.location = location;
    }
    set_email_1(email) {
        this.email_1 = email;
    }
    set_email_2(email) {
        this.email_2 = email;
    }
    set_phone(phone) {
        this.phone = phone;
    }
    set_mobile(mobile) {
        this.mobile = mobile;
    }
    set_notes(notes) {
        this.notes = notes;
    }
    receive(stock_receive, product) {
        return {
            "stock_receive": stock_receive,
            "product": product
        };
    }
    release(stock_release, product) {
        return {
            "stock_release": stock_release,
            "product": product
        };
    }
}
exports.default = Patient;
