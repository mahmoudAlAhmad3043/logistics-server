"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StockReceive {
    constructor(id, ref_number, import_shipment_id, local_shipment_id, store_id, receipt_date, received_quantity, plts, notes, status, release_id) {
        this._id = id;
        this._ref_number = ref_number;
        this._import_shipment_id = import_shipment_id;
        this._local_shipment_id = local_shipment_id;
        this._store_id = store_id;
        this._receipt_date = receipt_date;
        this._received_quantity = received_quantity;
        this._plts = plts;
        this._notes = notes;
        this._status = status;
        this._release_id = release_id;
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
    get_import_shipment_id() {
        return this._import_shipment_id;
    }
    set_import_shipment_id(import_shipment_id) {
        this._import_shipment_id = import_shipment_id;
    }
    get_local_shipment_id() {
        return this._local_shipment_id;
    }
    set_local_shipment_id(local_shipment_id) {
        this._local_shipment_id = local_shipment_id;
    }
    get_store_id() {
        return this._store_id;
    }
    set_store_id(store_id) {
        this._store_id = store_id;
    }
    get_receipt_date() {
        return this._receipt_date;
    }
    set_receipt_date(receipt_date) {
        this._receipt_date = receipt_date;
    }
    get_received_quantity() {
        return this._received_quantity;
    }
    set_received_quantity(received_quantity) {
        this._received_quantity = received_quantity;
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
    get_release_id() {
        return this._release_id;
    }
    set_release_id(release_id) {
        this._release_id = release_id;
    }
}
exports.default = StockReceive;
