/*
.. every object has a default prototype object in the first place
(Object.prototype)
*/
console.log(Object.getPrototypeOf({}) === Object.prototype);
//-> true
console.log(Object.getPrototypeOf(Object.prototype));
//-> null
// because Object.prototype object has no prototype


/*
.. every object has Object.prototype as default prototype
.. exceptionally functions have default Function.prototype
.. and arrays have default Array.prototype
*/
console.log(Object.getPrototypeOf(()=>{}) == Function.prototype);
//-> true
console.log(Object.getPrototypeOf([]) == Array.prototype)
//-> true



/*
.. using Object.create() to create object with a specific prototype 
*/
let rabbit_proto = {
  hello(){
    console.log(`${this.type} rabbit says hello...`);
  }
}
let cute_rabbit = Object.create(rabbit_proto);
cute_rabbit.type = "cute";
cute_rabbit.hello();
//-> cute rabbit says hello...




/*
.. Functions are derived from Function.prototype
.. and Function.prototype is derived from Object.prototype
*/
console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype);
//-> ture













console.log("end of viewport..");
