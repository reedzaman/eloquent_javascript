/*
.. creating custom errors for better exception handling
*/



// alternative to prompting and taking input
var direction = "lefft";

/*
.. returns a symbol for each direction given
.. throws an error in other case
*/
function prompt_direction() {
  let dir = direction;
  if(dir == "left") return "l";
  if(dir == "right") return "r";
  throw new dir_err("invalid direction");
}



/*
.. basically creating a same class as 'Error' with a different name
*/
class dir_err extends Error {};


for(;;) {
  try {
    let direc = promt_direction();
    console.log(direc);
    bresdfak;
  } catch (err) {
    // checks which kind of error came by, by checking the error's instance
    if(err instanceof dir_err) {
      console.log("direction error occured..");
    } else {
      console.log("not a direction error but some other one..");
      // throw err
      //-> ReferenceError: promt_direction is not defined
    }
    break;
  }
}

//-> 'not a direction error but some other one..'














console.log("end of viewport..");