/*
.. bad ways of mapping things
*/
let weights = {
  reed:60,
  Dhee: 35,
  Tahmid: 30
}
console.log("Does reed's weight exist?", "reed" in  weights );
//-> true
console.log("Does toString exists?", "toString" in weights);
//-> true
console.log(Object.keys(weights).indexOf("Tahmid"));
//-> 2
// toString exists because weights is derived from Object.prototype
// it can be avoided by two ways



/*
.. creating an object with null as prototype derives from nowhere
.. here toString doesn't exist because the object isn't derived from
   Object.prototype
*/
let heights = Object.create(null);
console.log("toString" in heights);
//-> false
console.log("toString" in Object.create(null));
//-> false
console.log(Object.getPrototypeOf(heights));
//-> null



/*
.. Object method names must be strings
.. But map keys can be something other than strings
   for example an 'object'
.. 'Map' is a good solution
*/
let weights_ = new Map();
weights_.set("Reed", 60);
weights_.set("Dhee", 40);
weights_.set("Talha", 35);

console.log("Reed is, ", weights_.get("Reed"), " KG");
//-> Reed is 60 KG
console.log(weights_.has("toString"));
//-> false





















console.log("end of viewport..");