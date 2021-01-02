/*
.. HAS random(): returns a random number between 0 to 100
.. to get the random number we have to perform method call
   to compute and return the value
*/
class randomizer {
  random(){
    return Math.floor(Math.random() * 100);
  }
}
let rnd = new randomizer;
console.log(rnd.random());
//-> 91



/*
.. method calls can be avoided using 'get'
*/
class randomizer_2 {
  get random(){
    return Math.floor(Math.random() * 100);
  }
}
let rnd_2 = new randomizer_2;
console.log(rnd_2.random);
//-> 18
// 'random' retrived like non-function properties 
// no function call required



/*
.. now we can perform a methor call when a property is 'written'
   using 'set'
*/
class kg_pound{
  constructor(n){
    this.weight = n;
  }
  get pound(){
    return this.weight * 2.20462;
  }
  set pound(n){
    this.weight = n / 2.20462;
  }
}
let convert = new kg_pound(12);
console.log(convert.pound);
//-> 26.455439999999996

// setting new value of pound
convert.pound = 12;
console.log(convert.weight)
//-> 5.443114913227677












console.log("end of viewport..");
