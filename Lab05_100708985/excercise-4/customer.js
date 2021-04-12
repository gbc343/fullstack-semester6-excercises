"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    Customer.prototype.GetAge = function () {
        console.log(this.firstName + " age is: " + this.age);
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", 45);
customer.greeter();
customer.GetAge();
