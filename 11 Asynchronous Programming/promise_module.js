/*
.. generates a random number [0-9]
.. Returns a promise
	.. Resolves if the number is odd
	.. Rejects if the number is even
*/
function getRandomNumber() {
	let num = Math.floor(Math.random() * 10);
	return new Promise((resolve, reject) => {
		if(num%2) setTimeout(() => resolve(num), 2000);
		else setTimeout(() => reject(Error("Even number found!")), 2000);
	});
}


module.exports = {getRandomNumber};
