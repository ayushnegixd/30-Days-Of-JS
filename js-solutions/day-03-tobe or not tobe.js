/* 2704. To Be Or Not To Be
 * * Write a function expect that helps developers test their code. 
 * It should take in any value 'val' and return an object with the following two functions:
 * * 1. toBe(val): accepts another value and returns true if the two values === each other. 
 * If they are not equal, it should throw an error "Not Equal".
 * * 2. notToBe(val): accepts another value and returns true if the two values !== each other. 
 * If they are equal, it should throw an error "Equal"
 * */

var expect =(val) => {
    return{
toBe: (otherval) => {
    if (val === otherval) {
        return true;
    }
    else {
        throw new Error("Not Equal");
    }
},
      notToBe: (otherval)=>{
        if (val !== otherval) {
            return true;
        }
        else {
            throw new Error("Equal")
        }}
        };
};