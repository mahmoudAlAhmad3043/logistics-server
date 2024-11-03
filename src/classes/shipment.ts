import ShipmentStatus from "./shipment_status"
import ShipmentType from "./shipment_type"
import CarrierType from "./carrier_type";
import PurchaseOrder from "./purchase_order";

export default class LocalShipment {
    private _id: number;
    private _purchase_order_id: number;
    private _delivery_order_id: number;
    private _transfer_order_id: number;
    private _status: ShipmentStatus;
    private _shipment_type: ShipmentType;
    private _carrier_type: CarrierType;
    private _driver_name: string;
    private _driver_phone: string;
    private _driver_email: string;
    private _car_id: number;
    private _ship_id: number;
    private _plain_id: number;
    private _supplier_order_number: string;
    private _supplier_invoice_number: string;
    private _supplier_id: number;
    private _customer_id: number;
    private _exporter_country: string;
    private _importer_country: string;
    private _ETA: Date;
    private _exit_date: Date;
    private _arrival_date: Date;
    private _free_days: number;
    private _date_of_discharge: Date;
    private _date_of_loading: Date;
    private _date_of_clear: Date;
    private _days_of_fines: number;
    private _shipping_company_id: number;
    private _invoice_number: string;
    private _notes: string;
    private _purchase_orders:PurchaseOrder[] = [];

    constructor(
        id: number,
        purchase_order_id: number,
        delivery_order_id: number,
        transfer_order_id: number,
        status: ShipmentStatus,
        shipment_type: ShipmentType,
        carrier_type: CarrierType,
        driver_name: string,
        driver_phone: string,
        driver_email: string,
        car_id: number,
        ship_id: number,
        plain_id: number,
        supplier_order_number: string,
        supplier_invoice_number: string,
        supplier_id: number,
        customer_id: number,
        exporter_country: string,
        importer_country: string,
        ETA: Date,
        exit_date: Date,
        arrival_date: Date,
        free_days: number,
        date_of_discharge: Date,
        date_of_loading: Date,
        date_of_clear: Date,
        days_of_fines: number,
        shipping_company_id: number,
        invoice_number: string,
        notes: string
    ) {
        this._id = id;
        this._purchase_order_id = purchase_order_id;
        this._delivery_order_id = delivery_order_id;
        this._transfer_order_id = transfer_order_id;
        this._status = status;
        this._shipment_type = shipment_type;
        this._carrier_type = carrier_type;
        this._driver_name = driver_name;
        this._driver_phone = driver_phone;
        this._driver_email = driver_email;
        this._car_id = car_id;
        this._ship_id = ship_id;
        this._plain_id = plain_id;
        this._supplier_order_number = supplier_order_number;
        this._supplier_invoice_number = supplier_invoice_number;
        this._supplier_id = supplier_id;
        this._customer_id = customer_id;
        this._exporter_country = exporter_country;
        this._importer_country = importer_country;
        this._ETA = ETA;
        this._exit_date = exit_date;
        this._arrival_date = arrival_date;
        this._free_days = free_days;
        this._date_of_discharge = date_of_discharge;
        this._date_of_loading = date_of_loading;
        this._date_of_clear = date_of_clear;
        this._days_of_fines = days_of_fines;
        this._shipping_company_id = shipping_company_id;
        this._invoice_number = invoice_number;
        this._notes = notes;
    }

    // Getters
    get_id(): number {
        return this._id;
    }

    get_purchase_order_id(): number {
        return this._purchase_order_id;
    }

    get_delivery_order_id(): number {
        return this._delivery_order_id;
    }

    get_transfer_order_id(): number {
        return this._transfer_order_id;
    }

    get_status(): ShipmentStatus {
        return this._status;
    }

    get_shipment_type(): ShipmentType {
        return this._shipment_type;
    }

    get_carrier_type(): CarrierType {
        return this._carrier_type;
    }

    get_driver_name(): string {
        return this._driver_name;
    }

    get_driver_phone(): string {
        return this._driver_phone;
    }

    get_driver_email(): string {
        return this._driver_email;
    }

    get_car_id(): number {
        return this._car_id;
    }

    get_ship_id(): number {
        return this._ship_id;
    }

    get_plain_id(): number {
        return this._plain_id;
    }

    get_supplier_order_number(): string {
        return this._supplier_order_number;
    }

    get_supplier_invoice_number(): string {
        return this._supplier_invoice_number;
    }

    get_supplier_id(): number {
        return this._supplier_id;
    }

    get_customer_id(): number {
        return this._customer_id;
    }

    get_exporter_country(): string {
        return this._exporter_country;
    }

    get_importer_country(): string {
        return this._importer_country;
    }

    get_ETA(): Date {
        return this._ETA;
    }

    get_exit_date(): Date {
        return this._exit_date;
    }

    get_arrival_date(): Date {
        return this._arrival_date;
    }

    get_free_days(): number {
        return this._free_days;
    }

    get_date_of_discharge(): Date {
        return this._date_of_discharge;
    }

    get_date_of_loading(): Date {
        return this._date_of_loading;
    }

    get_date_of_clear(): Date {
        return this._date_of_clear;
    }

    get_days_of_fines(): number {
        return this._days_of_fines;
    }

    get_shipping_company_id(): number {
        return this._shipping_company_id;
    }

    get_invoice_number(): string {
        return this._invoice_number;
    }

    get_notes(): string {
        return this._notes;
    }

    // Setters
    set_id(id: number) {
        this._id = id;
    }

    set_purchase_order_id(purchase_order_id: number) {
        this._purchase_order_id = purchase_order_id;
    }

    set_delivery_order_id(delivery_order_id: number) {
        this._delivery_order_id = delivery_order_id;
    }

    set_transfer_order_id(transfer_order_id: number) {
        this._transfer_order_id = transfer_order_id;
    }

    set_status(status: ShipmentStatus) {
        this._status = status;
    }

    set_shipment_type(shipment_type: ShipmentType) {
        this._shipment_type = shipment_type;
    }

    set_carrier_type(carrier_type: CarrierType) {
        this._carrier_type = carrier_type;
    }

    set_driver_name(driver_name: string) {
        this._driver_name = driver_name;
    }

    set_driver_phone(driver_phone: string) {
        this._driver_phone = driver_phone;
    }

    set_driver_email(driver_email: string) {
        this._driver_email = driver_email;
    }

    set_car_id(car_id: number) {
        this._car_id = car_id;
    }

    set_ship_id(ship_id: number) {
        this._ship_id = ship_id;
    }

    set_plain_id(plain_id: number) {
        this._plain_id = plain_id;
    }

    set_supplier_order_number(supplier_order_number: string) {
        this._supplier_order_number = supplier_order_number;
    }

    set_supplier_invoice_number(supplier_invoice_number: string) {
        this._supplier_invoice_number = supplier_invoice_number;
    }

    set_supplier_id(supplier_id: number) {
        this._supplier_id = supplier_id;
    }

    set_customer_id(customer_id: number) {
        this._customer_id = customer_id;
    }

    set_exporter_country(exporter_country: string) {
        this._exporter_country = exporter_country;
    }

    set_importer_country(importer_country: string) {
        this._importer_country = importer_country;
    }

    set_ETA(ETA: Date) {
        this._ETA = ETA;
    }

    set_exit_date(exit_date: Date) {
        this._exit_date = exit_date;
    }

    set_arrival_date(arrival_date: Date) {
        this._arrival_date = arrival_date;
    }

    set_free_days(free_days: number) {
        this._free_days = free_days;
    }

    set_date_of_discharge(date_of_discharge: Date) {
        this._date_of_discharge = date_of_discharge;
    }

    set_date_of_loading(date_of_loading: Date) {
        this._date_of_loading = date_of_loading;
    }

    set_date_of_clear(date_of_clear: Date) {
        this._date_of_clear = date_of_clear;
    }

    set_days_of_fines(days_of_fines: number) {
        this._days_of_fines = days_of_fines;
    }

    set_shipping_company_id(shipping_company_id: number) {
        this._shipping_company_id = shipping_company_id;
    }

    set_invoice_number(invoice_number: string) {
        this._invoice_number = invoice_number;
    }

    set_notes(notes: string) {
        this._notes = notes;
    }

    add_purchase_order(purchase_order:PurchaseOrder){
        this._purchase_orders.push(purchase_order)
    }
    remove_purchase_order(purchase_order:PurchaseOrder){
        this._purchase_orders.splice(this._purchase_orders.findIndex(obj => obj.get_id() === purchase_order.get_id()))
    }
    get_purchase_orders():PurchaseOrder[]{
        return this._purchase_orders;
    }
    clear_purchase_orders():void{
        this._purchase_orders = [];
    }
}