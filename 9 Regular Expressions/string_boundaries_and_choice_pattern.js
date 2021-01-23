let data = `
this is a text data and i'm about to process it
now
how am i going to process this?
any idea
`;


/*
.. a boundary helps us find matches that are indivisual words
*/
console.log(/pro/.test(data));
//-> true
console.log(/\bpro\b/.test(data));
//-> false









console.log("end of viewport..");