class human{
  //....  
};



/*
.. Overriding the toString method that already exists in human class
*/
human.prototype.toString = function(){
  return "hello ..";
}
let reed = new human ;
let joy = new human ;
console.log(String(reed));
//-> hello ..
// here the String function uses an object's toString method
// to produce something meaningful to form a string
// but the toString method is already overridden so it uses the
// new one



/*
.. simle use of symbols
*/
let sym = Symbol("hello");
human.prototype[sym] = 55;
console.log(reed[sym]);
console.log(joy[sym])












console.log("end of viewport..");