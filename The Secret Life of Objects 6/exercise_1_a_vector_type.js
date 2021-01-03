/*
.. TAKES two cordinates, x & y
.. HAS plus(): takes an 'vec' object
               returns an object that is the sum of this & vec
       minus(): takes an 'vec' object
               returns an object that is the subtraction of this & vec
*/
class vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  // U = {u1,u2} V = {v1,v2} -> U + V = { u1+v1 , u2+v2 }
  plus(vector) {
    return new vec(this.x + vector.x, this.y + vector.y);
  }
  // U = {u1,u2} V = {v1,v2} -> U - V = { u1+(-v1) , u2+(-v2) }
  minus(vector) {
    return new vec(this.x + -1 * vector.x, this.y + -1 * vector.y);
  }
  // length of vector U from (0,0) = sqrt of (u1^2 + u2^2)
  get length(){
    return Math.sqrt( this.x * this.x + this.y * this.y );
  }
}

let vec1 = new vec(2,3);
let vec2 = new vec(4,4);
let sum = vec1.plus(vec2);
let diff = vec1.minus(vec2);

console.log(sum.length);
//-> 9.219544457292887
console.log(diff.length)
//-> 2.23606797749979

console.log(sum);
// vec {
//   x: 6,
//   y: 7,
//   __proto__: vec {
//     constructor: ƒ vec(),
//     plus: ƒ plus(),
//     minus: ƒ minus(),
//     length: 9.219544457292887
//   }
// }

console.log(diff);
// vec {
//   x: -2,
//   y: -1,
//   __proto__: vec {
//     constructor: ƒ vec(),
//     plus: ƒ plus(),
//     minus: ƒ minus(),
//     length: 2.23606797749979
//   }
// }

















console.log("end of viewport..");