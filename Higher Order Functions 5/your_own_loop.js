/* 
value : take an initial value
test : an testing function if true continues
body : takes curr val and does something
update : take curr val & returns updated one
*/
function loop(value, test, body, update){
  let val = value;
  while(true){
    if(test(val)){
      body(val);
      val = update(val);
    }
    else break;
  }
}

// printing 1 to 10
loop(1, x=> x<11?true:false, x=> console.log(x) , x=> x+=1);