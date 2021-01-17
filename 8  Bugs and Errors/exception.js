let name = "c";

const accounts = {
  a: 100,
  b: 200,
  c: 140
};

function get_account() {
  let acc_name = name;
  if(!accounts.hasOwnProperty(acc_name)) {
    throw new Error("No, user name found");
  }
  return acc_name;
}

function transfer(from, ammount) {
  if(accounts[from] < ammount) return null;
  accounts[from] -= ammount;
  accounts[get_account()] += ammount;
}

transfer("b", 40);
console.log(accounts);
//-> { a: 100, b: 160, c: 180 }





/*
.. a much good version of the banking code
.. the use of 'finally'
*/
function transfer(from, amount) {
  if (accounts[from] < amount) return ;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[get_account()] += amount;
    progress = 2;
  } finally {
    if(progress == 1) {
      accounts[from] += amount;
    }
  }
}












console.log("end of viewport..");