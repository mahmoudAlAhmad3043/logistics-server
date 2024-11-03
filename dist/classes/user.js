"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(user_id, first_name, middle_name, last_name, password, email, role) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.password = password;
        this.email = email;
        this.role = role;
    }
    getUserId() {
        return this.user_id;
    }
    getFirstName() {
        return this.first_name;
    }
    getMiddleName() {
        return this.middle_name;
    }
    getLastName() {
        return this.last_name;
    }
    getPassword() {
        return this.password;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
    setUserId(user_id) {
        this.user_id = user_id;
    }
    setFirstName(first_name) {
        this.first_name = first_name;
    }
    setMiddleName(middle_name) {
        this.middle_name = middle_name;
    }
    setLastName(last_name) {
        this.last_name = last_name;
    }
    setPassword(password) {
        this.password = password;
    }
    setEmail(email) {
        this.email = email;
    }
    setRole(role) {
        this.role = role;
    }
}
exports.default = User;
