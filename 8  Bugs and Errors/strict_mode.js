/*
.. non strict mode
*/
function count() {
  // not using let here. But js still takes 'i' as a valid binding
  // it secretly creates a global binding named 'i' and uses it
  for(i = 0; i < 10; i++) {
    console.log(i + 1);
  }
}

count();
//-> 1 2 3 4 5 ...
console.log(i);
//-> 10
// nowhere 'i' was declared. Still gived a value



/*
.. strict mode
*/
function count_again() {
  "use strict";
  for(j = 0; j < 10; j++) {
    console.log(j + 1);
  }
}

//count_again();
//-> ReferenceError: j is not defined




/*
.. a regular constructor function that takes 'name' argument
*/
function person(name) {
  this.name = name;
}

// when called without 'new' as a regular function, the 'person' function
// takes 'name' as a binding from it's parent scope. So, it creates it 
// silently
let reed = person("reed");

console.log(name);
//-> 'reed'
// name called as a global binding still gives us a value;



/*
.. now in strict mode
*/
function another_person(name_2) {
  "use strict";
  this.name_2 = name_2;
}

// let dhee = another_person("dhee");
//-> Cannot set property 'name_2' of undefined













console.log("end of viewport..");