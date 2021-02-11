const {give_random} = require("./server.js");

give_random().then(response => console.log(response));
console.log("the end");
