/*
.. \d -> [0-9]
   \w -> word charecters
   \s -> whitespace charecters
   \D -> inverted \d
   \W -> inverted \w
   \S -> inverted \s
*/
console.log(/[\d]/.test("thereIsANumberHidden2Here"));
//-> true
console.log(/[a-z]/.test("2342AA"));
//-> false
console.log(/[a-z]/.test("2342aa"))
//-> true




/*
.. caret '^' inverts a set
   mathces if there is atleast one charecter that doesn't exist in the set
*/
console.log(/[^01]/.test("1011010001010101"));
//-> false
console.log(/[^01]/.test("10110105001010101"))
//-> true




/*
.. a '+' sign indicates a charecter might apear at least once or more
.. a '*' sign indicates a charecter might or might not apear once or more

.. a+b accepts ab
               aaab
               aaaaabb
               not b
.. a*b accepts ab
               aaab
               aaaaabb
               b
*/
console.log(/a+b/.test("ab"));
//-> true
console.log(/a+b/.test("aaab"));
//-> true
console.log(/a+b/.test("b"));
//-> false

console.log(/a*b/.test("ab"));
//-> true
console.log(/a*b/.test("aaab"));
//-> true
console.log(/a*b/.test("b"));
//-> true




/*
.. a '?' sign makes the previous charecter optional during the test
.. aab?aa accepts both aabaa and aaaa
*/
console.log(/sa'?ad/.test("saad"));
//-> true
console.log(/sa'?ad/.test("sa'ad"));
//-> true




/*
.. {n} indicates the charecter should apear exactly n times
.. {n,m} indicates the charecter should apear at least n times & at most m times
*/
let date_1 = /\d{2}\/\d{2}\/\d{2,4}/;
console.log(date_1.test("19/01/21"));
//-> true
console.log(date_1.test("19/01/2021"));
//-> true
console.log(date_1.test("19/1/2021"));
//-> false













console.log("end of viewport..");