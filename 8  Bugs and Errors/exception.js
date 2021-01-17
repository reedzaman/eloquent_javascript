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
















console.log("end of viewport..");