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

















console.log("end of viewport..");