"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(id, car_number, start_date_parking, end_date_parking, notes) {
        this._id = id;
        this._car_number = car_number;
        this._start_date_parking = start_date_parking;
        this._end_date_parking = end_date_parking;
        this._notes = notes;
    }
    get_id() {
        return this._id;
    }
    set_id(id) {
        this._id = id;
    }
    get_car_number() {
        return this._car_number;
    }
    set_car_number(car_number) {
        this._car_number = car_number;
    }
    get_start_date_parking() {
        return this._start_date_parking;
    }
    set_start_date_parking(start_date_parking) {
        this._start_date_parking = start_date_parking;
    }
    get_end_date_parking() {
        return this._end_date_parking;
    }
    set_end_date_parking(end_date_parking) {
        this._end_date_parking = end_date_parking;
    }
    get_notes() {
        return this._notes;
    }
    set_notes(notes) {
        this._notes = notes;
    }
}
exports.default = Car;
