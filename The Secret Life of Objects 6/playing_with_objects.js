/*
simple method
*/
let cat = {}
cat.speak = function(){
  console.log("meow..");
}
cat.speak();
//-> meow..


/*
method with 'this' binding
*/
let dog = {};
dog.type = "pitbull";
dog.speak = function(){
  console.log(`a ${this.type} dog says berk..`);
}
dog.speak();
//-> a pitbull dog says berk..


/*
associating a method to an object
*/
function say_hello(){
  console.log(`a ${this.type} dog says hello`);
}
let german_shepherd = {type:"german shepherd" , say_hello};
german_shepherd.say_hello();
//-> a german shepherd dog says hello



/*
calling a method for a specific object
*/
let labrador_retriever = {};
labrador_retriever.type = "Labrador Retriever";
say_hello.call(labrador_retriever);
//-> a Labrador Retriever dog says hello



/*
.. every function infact has it's own 'this' binding 
.. except for functions defined with the structure
   ( ) => {..}
   
*/
function show_acquisition(){
  return this.values.map( function(x){
    return x/this.total;
  } );
}
let nums = {values:[10,20,30,40,50], total:150};
show_acquisition.call(nums);
//-> [ NaN, NaN, NaN, NaN, NaN ]
// this doesn't work. because `this` inside the function inside map is owned
// by the unnamed function itself
// not by the show_acquisition function

function show_acquisition_2(){
  return this.values.map(x=> x/this.total);
}
show_acquisition_2.call(nums);
//-> [0.06666666666666667,0.13333333333333333,0.2, ....]














console.log("end of viewport..");