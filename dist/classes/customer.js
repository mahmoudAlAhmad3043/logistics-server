"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id, name, email, phone, location, notes) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._location = location;
        this._notes = notes;
    }
    get_id() {
        return this._id;
    }
    set_id(id) {
        this._id = id;
    }
    get_name() {
        return this._name;
    }
    set_name(name) {
        this._name = name;
    }
    get_email() {
        return this._email;
    }
    set_email(email) {
        this._email = email;
    }
    get_phone() {
        return this._phone;
    }
    set_phone(phone) {
        this._phone = phone;
    }
    get_location() {
        return this._location;
    }
    set_location(location) {
        this._location = location;
    }
    get_notes() {
        return this._notes;
    }
    set_notes(notes) {
        this._notes = notes;
    }
}
exports.default = Customer;
