/*
.. Evaluating data as code
*/
const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"));
// → 2
console.log(x);


/*
.. Using Function constructor
*/
let plus_one = Function("n", "return ++n");
console.log(plus_one(2));
//-> 3











console.log("end of viewport..");