/*
.. Regular Expression objects have properties
.. 'source' is one of them, that contains the expression itself as a string
.. 'lastIndex' contains the possition from where the next match will start
   from
   .. conditions are:
      .. expression must have global (g) or sticky (y) option enabled
      .. match must happen through 'exec' method
.. If the a match was found exec updates the lastIndex property
   to the point after the match
   Else it is set back to 0. A Newly created RegExp has 0 as lastIndex
*/
let pattern = /y/g;

console.log(pattern.exec("aayoooooyooo").index);
//-> 2
pattern.lastIndex = 5;
console.log(pattern.exec("aayoooooyooo").index);
//-> 8
console.log(pattern.lastIndex);
//-> 9





/*
.. The sticky (y) option looks for a match right at the lastIndex
.. Whereas global (g) option looks for a match after the lastIndex
*/
let global = /abc/g;
console.log(global.exec("xyz abc"));
//-> [ 'abc', index: 4, input: 'xyz abc', groups: undefined ]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));
//-> null

sticky.lastIndex = 4;
console.log(sticky.exec("xyz abc"));
//-> [ 'abc', index: 4, input: 'xyz abc', groups: undefined ]




/*
.. There are some problems with global option of a regular expression
   when exec is called the function call leaves lastIndex at a certain point
.. So, the next time 'exec' is called with a different argument it fails to do
   the job properly
*/
let find_one = /1/g;
console.log(find_one.exec("here is the one after the colon: 1"));
//-> ['1', index: 33, ..]
console.log(find_one.exec("now again one here: 1"));
//-> null




/*
.. Global option in a regular expression also changes the way 'match' method of
   strings behaves.
.. If called normally it returns an object indentical to object returned by 
   'exec'
   But when called with 'global' it returns an array containing all the matched
   pairs.
*/
console.log("here is the one after the colon: 1 and another 1".match(/1/));
//-> ['1', index: 33, ..]
console.log("here is the one after the colon: 1 and another 1".match(/1/g));
//-> ['1', '1']
















console.log("end of viewport..");