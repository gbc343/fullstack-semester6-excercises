const assert = require('chai').assert;
const index = require("../app/calculator.js");
//const mocha = require('mocha');

//mocha.s//etup('bdd'); // minimal setup


describe("Index Tests", function(){
 
    describe("Addition", function(){
        it("add(5, 2) expected result 7 PASS", function() {
            let result = index.add(5,2);
            assert.equal(result,7);
        });
        it("add(5,2) expected result 8 FAIL", function() {
            let result = index.add(5,2);
            assert.equal(result,8);
        });
    });
 
    describe("Subtraction", function(){
        it("sub(5, 2) expected result 3 PASS", function() {
            let result = index.sub(5,2);
            assert.equal(result,3);
        });
        it("sub(5,2) expected result 5 FAIL", function() {
            let result = index.sub(5,2);
            assert.equal(result,5);
        });
    });   


    describe("Multiplication", function(){
        it("mul(5, 2) expected result 10 PASS", function() {
            let result = index.mul(5,2);
            assert.equal(result,10);
        });
        it("sub(5,2) expected result 5 FAIL", function() {
            let result = index.mul(5,2);
            assert.equal(result,12);
        });
    });   


    describe("Division", function(){
        it("div(10, 2) expected result 5 PASS", function() {
            let result = index.div(10,2);
            assert.equal(result,5);
        });
        it("div(10,2) expected result 2 FAIL", function() {
            let result = index.div(10,2);
            assert.equal(result,2);
        });
    });   
 
});

//mocha.run();
