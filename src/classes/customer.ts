

export default class Customer {
    private _id: number;
    private _name: string;
    private _email: string;
    private _phone: string;
    private _location: string;
    private _notes: string;

    constructor(id: number, name: string, email: string, phone: string, location: string, notes: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._location = location;
        this._notes = notes;
    }

    get_id(): number {
        return this._id;
    }

    set_id(id: number) {
        this._id = id;
    }

    get_name(): string {
        return this._name;
    }

    set_name(name: string) {
        this._name = name;
    }

    get_email(): string {
        return this._email;
    }

    set_email(email: string) {
        this._email = email;
    }

    get_phone(): string {
        return this._phone;
    }

    set_phone(phone: string) {
        this._phone = phone;
    }

    get_location(): string {
        return this._location;
    }

    set_location(location: string) {
        this._location = location;
    }

    get_notes(): string {
        return this._notes;
    }

    set_notes(notes: string) {
        this._notes = notes;
    }
}