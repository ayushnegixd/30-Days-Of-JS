/**
 * 2667. Create Hello World Function
 * Description: Write a function that returns a new function that always returns "Hello World".
 */

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    };
};