/*
.. this function returns an randomly generated number if the number is
   even
.. if not it throws an exception
*/
function say_even() {
  let num = Math.floor(Math.random() *10);
  if(!(num%2)) {
    return "even number " + num + " found at say_even";
  } 
  throw new Error("odd number found at say_even()");
}




/*
.. fixes the odd number problem by catching the exception
*/
try {
  console.log(say_even());
} catch(num) {
  if(((num+1)%2) == 0) {
    "madeup even number " + num+1 + " found at say_even";
  }
}








console.log("end of viewport..");