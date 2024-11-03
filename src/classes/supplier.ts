

export default class Supplier{
    private _id:number;
    private _name:string;
    private _location:string;
    private _email:string;
    private _phone:string;
    private _mobile:string;
    private _contact_name:string;
    private _website:string;
    private _notes:string;

    constructor(
        id: number,
        name: string,
        location: string,
        email: string,
        phone: string,
        mobile: string,
        contact_name: string,
        website: string,
        notes: string
    ) {
        this._id = id;
        this._name = name;
        this._location = location;
        this._email = email;
        this._phone = phone;
        this._mobile = mobile;
        this._contact_name = contact_name;
        this._website = website;
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

    get_location(): string {
        return this._location;
    }

    set_location(value: string) {
        this._location = value;
    }

    get_email(): string {
        return this._email;
    }

    set_email(value: string) {
        this._email = value;
    }

    get_phone(): string {
        return this._phone;
    }

    set_phone(value: string) {
        this._phone = value;
    }

    get_mobile(): string {
        return this._mobile;
    }

    set_mobile(value: string) {
        this._mobile = value;
    }

    get_contact_name(): string {
        return this._contact_name;
    }

    set_contact_name(value: string) {
        this._contact_name = value;
    }

    get_website(): string {
        return this._website;
    }

    set_website(value: string) {
        this._website = value;
    }

    get_notes(): string {
        return this._notes;
    }

    set_notes(value: string) {
        this._notes = value;
    }
}

