/*
.. inheriting from 'Error' to create a custom error class
*/
class multiplicator_unit_failure extends Error {};


function primitive_multiply(num1, num2) {
  let chance = Math.floor(Math.random() * 10 + 1);
  // 20% of the time works well, 80% fails & throws error
  if(chance<3) {
    return num1 * num2;
  } else {
    throw new multiplicator_unit_failure("multiplicator error");
  }
}



for(;;) {
  let number1 = Math.floor(Math.random() * 10);
  let number2 = Math.floor(Math.random() * 10);
  try {
    let result = primitive_multiply(number1, number2);
    console.log(result);
    break;
  } catch (err) {
    if(err instanceof multiplicator_unit_failure) {
      console.log("Unit error");
    } else {
      // console.log("Not an unit error but something else is wrong");
      throw err;
    }
  }
}














console.log("end of viewport..");
