/*
.. Group class from previous exercise
*/
class Group{
  constructor(){
    this.group = [];
  }
  has(x){
    return (this.group.indexOf(x) == -1)? false: true;
  }
  add(x){
    if(this.has(x) == false){
      this.group.push(x);
    }
  }
  delete(x){
    let index = this.group.indexOf(x);
    if(index != -1){
      this.group = 
        this.group.slice(0, index).concat(this.group.slice(index+1));
    }
  }
  get length(){
    return this.group.length;
  }
  static from(data_set){
    let new_group = new Group;
    for(let element of data_set){
      new_group.add(element);
    }
    return new_group;
  }
  [Symbol.iterator](){
    return new Group_iterator(this);
  }
}



/*
.. PROVIDES an iterable hook
   HAS next(): returns next iterated object
   RETURNS an object with the same format as standard
           Symbol.iterator, { value:{} , done }
           Making it iterable by functions like for..of loop
*/
class Group_iterator{
  constructor(Group){
    this.i = 0;
    this.grp = Group;
    console.log(this.grp);
    this.length = this.grp.length;
  }
  
  next(){
    if(this.i >=  this.length){
      return {done: true};
    }
    let current_value = this.grp.group[this.i];
    let value = {
      value: current_value
    }
    this.i++;
    return {value, done: false};
  }
}



let grp1 = new Group;
for(let i = 0; i < 10; i++){
  grp1.add(i);
}


/*
.. Group object iterated in a for..of loop
*/
for(let {value, done} of grp1){
  console.log(value);
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9














console.log("end of viewport..");