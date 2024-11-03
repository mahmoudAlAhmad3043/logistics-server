"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocalShipment {
    constructor(id, car_id, customer_id, status, driver_name, driver_phone, exit_date, arrival_date) {
        this._id = id;
        this._car_id = car_id;
        this._customer_id = customer_id;
        this._status = status;
        this._driver_name = driver_name;
        this._driver_phone = driver_phone;
        this._exit_date = exit_date;
        this._arrival_date = arrival_date;
    }
    get_id() {
        return this._id;
    }
    set_id(id) {
        this._id = id;
    }
    get_car_id() {
        return this._car_id;
    }
    set_car_id(car_id) {
        this._car_id = car_id;
    }
    get_customer_id() {
        return this._customer_id;
    }
    set_customer_id(customer_id) {
        this._customer_id = customer_id;
    }
    get_status() {
        return this._status;
    }
    set_status(status) {
        this._status = status;
    }
    get_driver_name() {
        return this._driver_name;
    }
    set_driver_name(driver_name) {
        this._driver_name = driver_name;
    }
    get_driver_phone() {
        return this._driver_phone;
    }
    set_driver_phone(driver_phone) {
        this._driver_phone = driver_phone;
    }
    get_exit_date() {
        return this._exit_date;
    }
    set_exit_date(exit_date) {
        this._exit_date = exit_date;
    }
    get_arrival_date() {
        return this._arrival_date;
    }
    set_arrival_date(arrival_date) {
        this._arrival_date = arrival_date;
    }
}
exports.default = LocalShipment;
