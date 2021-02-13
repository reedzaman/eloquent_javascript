function call(){
	return new Promise((resolve, reject)=>{
		let random = Math.floor(Math.random() * 5);
		setTimeout(() => {resolve(random)}, random * 1000);
	});
}

module.exports.call = call;
