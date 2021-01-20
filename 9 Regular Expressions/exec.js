/*
.. subexpressions can be grouped using parenthese
*/
let boo = /boo+(hoo+)+/i;
console.log(boo.test("booHo"));
//-> false
console.log(boo.test("BooHooooHooo"));
//-> true




/*
.. exec returns null if no match was found. Or,
                an of Object with information about the match if found
*/
let match_info = /\D+/.exec("1231233123hello23423");
console.log(match_info);
// [
//   'hello',
//   index: 10,
//   input: '1231233123hello23423',
//   groups: undefined
// ]




/*
.. string values have a 'match' method that works somewhat similar to
   'exec' method
*/
console.log("one two 100".match(/\d+/));
// '100', index: 8, input: 'one two 100', groups: undefined ]




let q_text = /'([^']*)'/;
console.log(q_text.exec("I said 'hello'"));
// [
//   "'hello'",
//   'hello',
//   index: 7,
//   input: "I said 'hello'",
//   groups: undefined
// ]



console.log(/bad(ly)?/.exec("bad"));
// [ 'bad', undefined, index: 0, input: 'bad', groups: undefined ]
console.log(/bad(ly)?/.exec("badly"))
// [ 'badly', 'ly', index: 0, input: 'badly', groups: undefined ]

console.log(/(\w)+/.exec("abcdef"));
// [ 'abcdef', 'f', index: 0, input: 'abcdef', groups: undefined ]
// the last match came after first match













console.log("end of viewport..");