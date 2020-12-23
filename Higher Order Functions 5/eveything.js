function every_using_loop(arr, func){
  for(let element of arr){
    if(!func(element)){
       return false;
    }
  }
  return true;
}

function every(arr, func){
  return !arr.some(x=> !func(x));
}

// checking if all items of a dataset is odd using loop
console.log(every_using_loop([1,13,1,19], x=> x%2));
// -> true
console.log(every_using_loop([12,13,1,19], x=> x%2));
// -> false
console.log(every_using_loop([1,13,10,19], x=> x%2));
// -> false



// checking if all items of a dataset is odd using .some() method
console.log(every([1,13,1,19], x=> x%2));
// -> true
console.log(every([12,13,1,19], x=> x%2));
// -> false
console.log(every([1,13,10,19], x=> x%2));
// -> false
