
export default class ShippingCmpany{
    private _id:number;
    private _name:string;
    private _email1:string;
    private _email2:string;
    private _phone:string;
    private _country:string;
    private _contact_name:string;
    private _notes:string;

    constructor(
        id: number,
        name: string,
        email1: string,
        email2: string,
        phone: string,
        country: string,
        contact_name: string,
        notes: string
    ) {
        this._id = id;
        this._name = name;
        this._email1 = email1;
        this._email2 = email2;
        this._phone = phone;
        this._country = country;
        this._contact_name = contact_name;
        this._notes = notes;
    }

    get_id(): number {
        return this._id;
    }

    set_id(value: number) {
        this._id = value;
    }

    get_name(): string {
        return this._name;
    }

    set_name(value: string) {
        this._name = value;
    }

    get_email1(): string {
        return this._email1;
    }

    set_email1(value: string) {
        this._email1 = value;
    }

    get_email2(): string {
        return this._email2;
    }

    set_email2(value: string) {
        this._email2 = value;
    }

    get_phone(): string {
        return this._phone;
    }

    set_phone(value: string) {
        this._phone = value;
    }

    get_country(): string {
        return this._country;
    }

    set_country(value: string) {
        this._country = value;
    }

    get_contact_name(): string {
        return this._contact_name;
    }

    set_contact_name(value: string) {
        this._contact_name = value;
    }

    get_notes(): string {
        return this._notes;
    }

    set_notes(value: string) {
        this._notes = value;
    }
}