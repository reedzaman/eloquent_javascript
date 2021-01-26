/*
.. regular expressions can be used by creating them dynamically
   using RegExp constructor
*/
let info = `
This is a text information about me and my friends
I'm reed and I study computers and my friend dipu studies civil
And Joy studies Electricity
`;

let names = ["reed", "dipu", "joy"];

for(let element of names) {
  let regexp = new RegExp("\\b(" + element + ")\\b", "gi");
  info = info.replace(regexp, ">> $1 <<")
}
// "This is a text information about me and my friends
// I'm >> reed << and I study computers and my friend >> dipu << studies civil
// And >> Joy << studies Electricity "



/*
.. Strings have a 'search' method which expects a regular expression as argument
   Returns the index of the found match. 
   Returns -1 if not found
*/
console.log("Hello World".search(/world/i));
//-> 6
console.log("  ".search(/world/i));
//-> -1










console.log("end of viewport..");