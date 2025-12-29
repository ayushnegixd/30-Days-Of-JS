/**
 * 2665. Counter II
 * * Write a function createCounter. It should accept an initial integer init. 
 * It should return an object with three functions:
 * * 1. increment(): increases the current value by 1 and returns it.
 * 2. decrement(): reduces the current value by 1 and returns it.
 * 3. reset(): sets the current value to init and returns it.*/

var createCounter = function(init) {
    let n = init;
    return {
        increment: () => {
            return ++init;
        },
        decrement: () => {
            return --init;
        },
        reset: () => {
            init = n;
            return n;
        } }
};