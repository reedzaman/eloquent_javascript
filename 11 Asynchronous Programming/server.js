function give_random(){
	return new Promise((resolve, reject)=>{
		let random = Math.floor(Math.random() * 5);
		setTimeout(() => {resolve(random)}, random * 1000);
	});
}

module.exports.give_random = give_random;
