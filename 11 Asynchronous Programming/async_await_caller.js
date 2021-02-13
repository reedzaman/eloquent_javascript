const {call} = require("./server.js");

async function two_randoms() {
	let one = await call();
	let two = await call();
	
	return {one, two}
}

two_randoms().then(console.log);
