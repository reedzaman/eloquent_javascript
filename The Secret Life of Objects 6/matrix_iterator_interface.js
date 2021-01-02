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
  constructor (width, height, func) {
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
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

console.log('end of viewport..');
