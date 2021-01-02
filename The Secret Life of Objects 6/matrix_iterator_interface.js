class matrix{
  constructor(height, width){
    this.width = width;
    this.height = height;
    this.container = [];
    for(let x = 0; x<height; x++){
      for(let y = 0; y<width; y++){
        this.container[x*width + y] = undefined;
      }
    }
  }
  get(x,y){
    return this.container[x* this.width + y];
  }
  set(x,y, value){
    this.container[x* this.width + y] = value;
  }
}
let mat = new matrix(6,4);
mat.set(1,2, 434);
mat.set(4,2, 44);
mat.set(3,4, 4);
mat.set(2,1, 90);
mat.set(4,3, 3);
mat.set(1,0, 122);


class matrix_iterator{
  constructor(matrix){
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  
  next(){
    if(this.y == this.matrix.height){
      return {done: true};
    }
    let value = {
      value: this.matrix.get(this.x, this.y),
      done: false
    }
    this.x++;
    if(this.x == this.matrix.width){
      this.y++;
      this.x = 0;
    }
    return value;
  }
}


let x = new matrix_iterator(mat);
for(let i=0; i<30; i++){
  console.log(x.next());
}
/*
  { value: undefined, done: false }
  { value: 122, done: false }
  { value: undefined, done: false }
  { value: undefined, done: false }
  { value: undefined, done: false }
  { value: undefined, done: false }
  { value: 90, done: false }
  { value: undefined, done: false }

  ...

*/














console.log("end of viewport..");