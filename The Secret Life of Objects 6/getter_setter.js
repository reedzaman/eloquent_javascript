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
    this.kg = n;
  }
  get pound(){
    return this.kg * 2.20462;
  }
  set pound(n){
    this.kg = n / 2.20462;
  }
  static from_pound(x){
    return new kg_pound(x / 2.20462);
  }
}
let convert = new kg_pound(12);
console.log(convert.pound);
//-> 26.455439999999996

// setting new value of pound
convert.pound = 12;
console.log(convert.kg)
//-> 5.443114913227677


let new_convert = kg_pound.from_pound(12);
console.log(new_convert.pound)
//-> 12
console.log(new_convert.kg);
//-> 5.443114913227677









console.log("end of viewport..");
