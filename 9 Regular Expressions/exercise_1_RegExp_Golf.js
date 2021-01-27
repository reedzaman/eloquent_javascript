// Fill in the regular expressions


// car and cat
verify(/ca(t|r)s?/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

// pop and prop
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

// ferret, ferry, and ferrari
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// Any word ending in ious
verify(/\w*ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

// A whitespace character followed by a period, comma, colon, or semicolon
verify(/.*?\s[.,;:]/,
       ["bad punctuation ."],
       ["escape the period"]);

// A word longer than six letters
verify(/\w{6,}/,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

// A word without the letter e (or E)
verify(/\b[^eE]\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);
// "Unexpected match for 'earth bed'"
// "Unexpected match for 'learning ape'"

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}






console.log("end of viewport..");