/*
.. The following regular expression first takes the whole of the rest of
   the string.
.. A comment remover for javascript code
*/
function remove_comment(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "" );
}


console.log(remove_comment(`a + b //subtracting b from a`));
//-> 'a + b '  the .* doesn't match a new line charecter
// so it stops as soon as it finds a new line

console.log(remove_comment(`
let ab = function() { console.log("hello") };
/*
this is a comment that will be removed
*/ `));
// let ab = function() { console.log("hello") };
// but [^]* matches new line. so it is a good use for multiline comments



/*
.. But the when matching this string below. The [^]* first goes all the way
   to the end ( * / ) . Then it finds ( * / ) as the end of the iteration
.. Than it backtracks but it takes the first ( * / ) for granted and settles,
   removing all the comments in between
.. The reason is the +, *, ? and, {} are all greedy. Means they takes whatever
   comes first, then goes back whenever needed
.. This can be solved by putting '?' after these. Which makes these non Greedy
*/

console.log(remove_comment(`
a + b /* adding a and b */
a - b /* subtracting a from b */
a * b `
));
//->a + b 
//  a * b 

function remove_comment_non_greedy(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(remove_comment_non_greedy(`
a + b /* adding a and b */
a - b /* subtracting a from b */
a * b `
));
//->a + b 
//  a - b
//  a * b











console.log("end of viewport..");