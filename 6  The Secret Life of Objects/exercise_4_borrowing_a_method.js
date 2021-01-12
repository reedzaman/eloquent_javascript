/*
.. default hasOwnProperty is occupied by user
.. new hasOwnProperty returns false no matter what
*/
let x = {
  a: 10,
  b: 20,
  hasOwnProperty: false,
}


/*
.. the 'hasOwnProperty' name is already occupied
*/
console.log(x.hasOwnProperty);
//-> false
// accessing hasOwnProperty as a non-function property


/*
.. accessing default 'hasOwnProperty' function through
   call() method fixes the issue
*/
console.log(Object.hasOwnProperty.call(x, "a"));
//-> true















console.log("end of viewport..")