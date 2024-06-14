
function greet(name) {
    return new Promise((resolve, reject) => {
       
        if (!name) {
            reject("Name is required!");
        } else {
           
            resolve(`Hello, ${name}!`);
        }
    });
}


const name = "Mithun";


greet(name)
    .then(message => {
        console.log(message); 
    })
    .catch(error => {
        console.error(error);
    });
