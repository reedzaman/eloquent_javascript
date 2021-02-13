module.exports.call = async function() {
	let random = Math.floor(Math.random() * 10);
	setTimeout(() => Promise.resolve(random) , random * 1000);
}

