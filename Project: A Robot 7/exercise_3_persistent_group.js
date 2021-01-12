/*
.. Most data structures provided in a standard JavaScript environment aren’t very well suited for persistent use. Arrays have slice and concat methods, which allow us to easily create new arrays without damaging the old one. But Set, for example, has no methods for creating a new set with an item added or removed.

.. Write a new class PGroup, similar to the Group class from Chapter 6, which stores a set of values. Like Group, it has add, delete, and has methods.

.. Its add method, however, should return a new PGroup instance with the given member added and leave the old one unchanged. Similarly, delete creates a new instance without a given member.

.. The class should work for values of any type, not just strings. It does not have to be efficient when used with large amounts of values.

.. The constructor shouldn’t be part of the class’s interface (though you’ll definitely want to use it internally). Instead, there is an empty instance, PGroup.empty, that can be used as a starting value.

.. Why do you need only one PGroup.empty value, rather than having a function that creates a new, empty map every time?
*/


/*
.. a constructor to take an array and building a group
.. here the 'group' is gone through Object.freeze so that it can be
   immutable or parsistent
.. If no array/data is given through the parameter of the constructor
   the constructor creates assigns an empty array to 'group' and makes
   it immutable
*/
class p_group {
  constructor(data) {
    this.group = [];
    if(data != undefined) this.group = data;
    Object.freeze(this.group);
  }
  
  // if the element doesn't already exist it returns a new instance of 
  // p_group with the element 'this.group' & element added to it
  add(x) {
    if(!this.has(x)) return new p_group(this.group.concat(x));
  }
  
  
  // returns same as add except it removes the element
  delete(y) {
    if(this.group.includes(y))
      return new p_group(this.group.filter(x => x != y));
  }
  
  // return true if element exists. Otherwise false
  has(z) {
    return this.group.includes(z);
  }
}



let a = new p_group;

a = a.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false












console.log("end of viewport.. ");