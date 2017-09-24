/**
 * Created by Thinkpad on 2017/9/10.
 */

class User {
    constructor(){
        this.id = 0;
        this.username = "";
        this.password = "";
        this.email = "";
        this.phone = "";
        this.question = "";
        this.answer = "";
        this.role = "";
        this.create_time = new Date(0);
        this.update_time = new Date(0);
    }


    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get username() {
        return this._username;
    }
    set username(username) {
        this._username = username;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        this._phone = phone;
    }
    get question() {
        return this._question;
    }
    set question(question) {
        this._question = question;
    }
    get answer() {
        return this._answer;
    }
    set answer(answer) {
        this._answer = answer;
    }
    get role() {
        return this._role;
    }
    set role(role) {
        this._role = role;
    }
    get create_time() {
        return this._create_time;
    }
    set create_time(create_time) {
        this._create_time = create_time;
    }
    get update_time() {
        return this._update_time;
    }
    set update_time(update_time) {
        this._update_time = update_time;
    }

}

module.exports = User;