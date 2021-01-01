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
let sym = Symbol();
human.prototype[sym] = 55;
console.log(reed[sym]);
//-> 55
console.log(joy[sym]);
//-> 55


/*
.. Symbols are helpful while creating interfaces
.. for example
*/
let  toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
  return `the length of the array is ${this.length + 1}`;
}
console.log([1,2,3,4][toStringSymbol]());
//-> the length of the array is 5



/*
.. another way of including symbol properties to 
   object expression and classes
*/
let obj = {
  [toStringSymbol](){
    return `a new way ..`;
  }
}
console.log(obj[toStringSymbol]());
//-> a new way ..


console.log(Object.getOwnPropertyNames(Symbol));
/*
.. [
   'length',       'name',
   'prototype',    'for',
   'keyFor',       'asyncIterator',
   'hasInstance',  'isConcatSpreadable',
   'iterator',     'match',
   'matchAll',     'replace',
   'search',       'species',
   'split',        'toPrimitive',
   'toStringTag',  'unscopables',
   'asyncDispose', 'dispose',
   'observable',   'patternMatch',
   'replaceAll'
.. ]
*/
console.log(Object.getPrototypeOf(Symbol) == Object.prototype);
//-> false
console.log(Object.getPrototypeOf(Symbol) == Function.prototype);
//-> true
console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype);
//-> true
// Symbol <--- Function.prototype <--- Object.prototype

















console.log("end of viewport..");