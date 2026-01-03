/* * Description:
 * Write an asynchronous function that accepts a positive integer 'millis'. 
 * It should return a Promise that resolves after that many milliseconds.
 */

async function sleep(millis) {
    return new Promise ((resolve) => {
    setTimeout(resolve, millis);
        })
};