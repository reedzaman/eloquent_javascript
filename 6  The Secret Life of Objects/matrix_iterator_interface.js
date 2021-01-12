/*
.. a data structure . 2D matrix
.. TAKES width: width of the matrix (x)
         height: height of the matrix (y)
         func: a higher order function that specifies
         the intial values of the cells

.. HAS   get(): takes x,y cordinates returns that cells value
         set(): takes x,y cordinates, sets a value to that cell
         [Symbol.iterator]: returns an iterable hook(object)
*/
class matrix {
  constructor (width, height, func = (x,y) => undefined) {
    this.width = width;
    this.height = height;
    this.container = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.container[y * width + x] = func(x, y);
      }
    }
  }
  get(x, y) {
    return this.container[y * this.width + x];
  }
  set(x, y, value) {
    this.container[y * this.width + x] = value;
  }
  [Symbol.iterator](){
    return new matrix_iterator(this);
  }
}



/*
.. PROVIDES an iterable hook for "for..of" loop
.. TAKES a 'matrix'
.. HAS  next(): returns a object with the same format as the object
                returned by [Symbol.iterator]
                format, { {an object named value}, a_boolean_named_'done'}
*/
class matrix_iterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) {
      return { done: true };
    }
    let hello = this.matrix.get(this.x, this.y);
    let result = {
      value: {value: hello},
      done: false
    };
    this.x++;
    if (this.x == this.matrix.width) {
      this.y++;
      this.x = 0;
    }
    return result;
  }
}




/*
.. a new binding name mat of 'matrix' data type
*/
let mat = new matrix(2, 2, (x, y) => `position ${x} : ${y}`);




/*
.. running a for..of loop for my compound data structure 'matrix'
*/
for ( let {value , done} of mat){
  console.log(value);
}
//-> 'position 0 : 0'
//-> 'position 1 : 0'
//-> 'position 0 : 1'
//-> 'position 1 : 1'







/*
.. adding Inheritance
*/
class symatric_matrix extends matrix{
  constructor(size, element = (x, y) => undefined ){
    super(size, size, (x,y) => {
      if( x < y ) return element(y, x);
      else return element(x, y);
    });
  }
  
  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let sym = new symatric_matrix( 5 , (x,y) => ` ${x}, ${y}`);
sym;
//-> symatric_matrix {
//   width: 5,
//   height: 5,
//   container: [
//     ' 0, 0', ' 1, 0', ' 2, 0',
//     ' 3, 0', ' 4, 0', ' 1, 0',
//     ' 1, 1', ' 2, 1', ' 3, 1',
//     ' 4, 1', ' 2, 0', ' 2, 1',
//     ' 2, 2', ' 3, 2', ' 4, 2',
//     ' 3, 0', ' 3, 1', ' 3, 2',
//     ' 3, 3', ' 4, 3', ' 4, 0',
//     ' 4, 1', ' 4, 2', ' 4, 3',
//     ' 4, 4'
//   ],
//   __proto__: symatric_matrix { constructor: ƒ symatric_matrix(), set: ƒ set() }
// }



/*
.. the 'instanceof' operator allows us to know whether a class inherits from another class
   or not
*/
console.log(new symatric_matrix(2) instanceof matrix);
//-> true
console.log(new matrix(4,5) instanceof symatric_matrix);
//-> false
console.log([34,34] instanceof Array);
//-> true





















console.log('end of viewport..');
