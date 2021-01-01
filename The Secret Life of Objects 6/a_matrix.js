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













console.log("end of viewport..");