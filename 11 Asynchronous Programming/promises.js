const {getRandomNumber} = require("./promise_module.js");

getRandomNumber()
.then(value => console.log(value)) // resolves if the number is odd
.catch(err => console.log(err)); // rejects if the number is even
