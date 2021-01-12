/*
.. a data structure raplicating 'Set'
.. HAS static 'from' method that takes an iterable data_set,
   creates a Group object and add() all the item of data_set
   to it
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
  static from(data_set){
    let new_group = new Group;
    for(let element of data_set){
      new_group.add(element);
    }
    return new_group;
  }
}



let grp1 = new Group;
for(let i = 0; i < 10; i++){
  grp1.add(i);
}
console.log(grp1.has(9));
//-> true
console.log(grp1.has(20));
//-> false
console.log(grp1.group);
// [
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]



grp1.delete(4);
grp1.delete(7);
console.log(grp1.group);
// [
//   0, 1, 2, 3,
//   5, 6, 8, 9
// ]


let grp2 = Group.from([11,22,33,44,55,66]);
console.log(grp2.group);
// [ 
//   11, 22, 33, 44, 55, 66
// ]

















console.log("end of viewport..");