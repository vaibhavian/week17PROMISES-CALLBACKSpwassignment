
function doubleWithCallback(arr, callback) {
   
    return arr.map(callback);
}


function double(num) {
    return num * 2;
}


const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = doubleWithCallback(numbers, double);
lt
console.log(doubledNumbers); 
