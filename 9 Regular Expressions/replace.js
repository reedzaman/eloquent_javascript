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










console.log("end of viewport..");