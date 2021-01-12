let proto = {
  say_hello(){
    console.log(`${this.type} rabbit says hello`);
  }
}



/*
.. using a constructor function to create an instance of a given class
.. the old way of creating classes
*/
function make_rabbit(type){
  let new_rabbit = Object.create(proto);
  new_rabbit.type = type;
  return new_rabbit;
}
let cute_rabbit = make_rabbit("cute");
cute_rabbit.say_hello();
//-> cute rabbit says hello



/*
.. another method of using a function as a constructor
*/
function make_a_rabbit(){
  //.......
};
make_a_rabbit.prototype.jump = function(){
  console.log(`The ${this.type} rabbit jumped..`);
}
let a_rabbit = new make_a_rabbit;
a_rabbit.type = "White";
a_rabbit.jump();
//-> The White rabbit jumped..


















console.log("end of viewport...");