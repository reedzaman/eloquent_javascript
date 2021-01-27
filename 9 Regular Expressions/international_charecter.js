/*
.. Non English charecters are not considered as 'word charecters'
   for examples অ, আ, ক, খ will fall under '\W' non word charecters
.. But in case of whitespaces all UNICODE white spaces falls under
   \s set
*/
console.log(/🍏{3}/.test("🍏🍏🍏"));
//-> false
// in this case each 🍏 takes two unit. Let's call them XX now for three
// 🍏s we get XXXXXX. So, the {3} goes till XXX(here)XXX so it doesn't 
// match. But if we group this multiunit charecter in a ( ) then it'll match 
// Putting an 'u' (indicating unicode) treats the special charecters properly
console.log(/(🍏){3}/.test("🍏🍏🍏"));
//-> true
console.log(/<.>/.test("<🍏>"));
//-> false
console.log(/<.>/u.test("<🍏>"));
//-> true




/*
.. using '\p' in a regular expression with unicode('u') option in it, we
   can match 'all' charecter's Unicode standard
*/
console.log(/\p{Script=Bengali}/u.test("ক খ গ"));
//-> true
console.log(/\p{Script=Bengali}/u.test("a b c"));
//-> false
console.log(/\p{Alphabetic}/u.test("a"));
//-> true
console.log(/\p{Alphabetic}/u.test("@"));
//-> false













console.log("end of viewport..");