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









console.log("end of viewport..");