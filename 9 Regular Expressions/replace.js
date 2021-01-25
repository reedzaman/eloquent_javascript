/*
.. Replace method (of string) replaces first argument with the second
.. But it can take an RegExp as first argument
.. In that case it replaces the first match
.. But if we want to replace all the matches we need to add a 'g' at
   the end of the regular expression
*/

console.log("01a10110b01c01".replace(/[\D]+/, ""));
//-> '0110110b01c01'
// replaces only the first match

console.log("01a10110b01c01".replace(/[\D]+/g, ""));
//-> '01101100101'
// 'g' included after the regular expression hence replaces all the matches




/*
.. Caught groups can be refered as $'matched group number'
   e.g. $1 means the first caught group
        $2 means the second caught group
        $& means the whole match
   .. upto $9 can be refered
*/

console.log("Abara Ka Dabara".replace(/(\w+) (\w+) (\w+)/, "$3 $2 $1"));
//-> 'Dabara Ka Abara'




/*
.. Function can also be passed as the second argument of thr replace method
.. replace method will call the function for each group of a match
   (including the whole match) as argument.
   And the returned value will be added to the string
*/

console.log("The un and the fao".replace(/(un|fau)/g, x => x.toUpperCase()));
//-> 'The UN and the FAO'

"This text will be shown word by word".replace(/(\w+)/g, x => console.log(x));
// 'This'
// 'text'
// 'will'
// 'be'
// 'shown'
// 'word'
// 'by'
// 'word'
// 'undefined undefined undefined undefined undefined undefined undefined undefined'






console.log("end of viewport..");