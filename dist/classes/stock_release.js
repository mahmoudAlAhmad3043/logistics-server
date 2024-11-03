"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StockRelease {
    constructor(id, ref_number, local_shipment_id, export_shipment_id, store_id, release_date, released_quantity, plts, notes, status) {
        this._id = id;
        this._ref_number = ref_number;
        this._local_shipment_id = local_shipment_id;
        this._export_shipment_id = export_shipment_id;
        this._store_id = store_id;
        this._release_date = release_date;
        this._released_quantity = released_quantity;
        this._plts = plts;
        this._notes = notes;
        this._status = status;
    }
    get_id() {
        return this._id;
    }
    set_id(id) {
        this._id = id;
    }
    get_ref_number() {
        return this._ref_number;
    }
    set_ref_number(ref_number) {
        this._ref_number = ref_number;
    }
    get_local_shipment_id() {
        return this._local_shipment_id;
    }
    set_local_shipment_id(local_shipment_id) {
        this._local_shipment_id = local_shipment_id;
    }
    get_export_shipment_id() {
        return this._export_shipment_id;
    }
    set_export_shipment_id(export_shipment_id) {
        this._export_shipment_id = export_shipment_id;
    }
    get_store_id() {
        return this._store_id;
    }
    set_store_id(store_id) {
        this._store_id = store_id;
    }
    get_release_date() {
        return this._release_date;
    }
    set_release_date(release_date) {
        this._release_date = release_date;
    }
    get_released_quantity() {
        return this._released_quantity;
    }
    set_released_quantity(released_quantity) {
        this._released_quantity = released_quantity;
    }
    get_plts() {
        return this._plts;
    }
    set_plts(plts) {
        this._plts = plts;
    }
    get_notes() {
        return this._notes;
    }
    set_notes(notes) {
        this._notes = notes;
    }
    get_status() {
        return this._status;
    }
    set_status(status) {
        this._status = status;
    }
}
exports.default = StockRelease;
