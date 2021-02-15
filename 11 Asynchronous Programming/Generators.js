/*
.. generators provides with a better way of dealing with iterators
*/
function * random() {
  while(true){
    // yeild holds the flow. And is passed by, when next() is called.
    // next returns a new object {value, done: true | false}
    // value can be retrived by ****.next().value
    yield Math.floor(Math.random() * 100000);
  }
}

let randomGiver = random();

console.log(randomGiver.next());
// { value: 4340, done: false }

for(let i = 0; i < 5; i++) {
  console.log(randomGiver.next().value);
}
// 19582
// 22427
// 37425
// 34535
// 58834



/*
for(let elt of randomGiver){
  console.log(elt);
}
*/
//65598
//48989
//32013
// ...






function* powerSeries(n, p) {
	let base = n;
	while(true) {
		yield Math.pow(base, p);
    base++;
	}
}

let power = powerSeries(3, 2);

console.log(power.next().value);
//-> 9
console.log(power.next().value);
//-> 16
console.log(power.next().value);
//-> 25
console.log(power.next().value);
//-> 36







console.log("end of viewport..");