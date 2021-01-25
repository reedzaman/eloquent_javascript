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











console.log("end of viewport..");