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
console.log(String(reed));
//-> hello ..
// here the String function uses an object's toString method
// to produce something meaningful to form a string
// but the toString method is already overridden so it uses the
// new one

















console.log("end of viewport..");