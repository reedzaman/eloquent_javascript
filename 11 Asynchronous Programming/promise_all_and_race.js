let random1 =
	new Promise((resolve, reject) => {
		let a = Math.floor(Math.random() * 10);
		setTimeout(() => resolve(a), a * 1000);
	});
let random2 = 
        new Promise((resolve, reject) => {
                let a = Math.floor(Math.random() * 10);
                setTimeout(() => resolve(a), a * 1000);
        });
let random3 =  
        new Promise((resolve, reject) => {
                let a = Math.floor(Math.random() * 10);
                setTimeout(() => resolve(a), a * 1000);
        });

module.exports.call_all = function() {
	// calls all the promises at the same time and 
	//after all of them resolve or one of them failes it  takes action
	Promise.all(
		[random1, random2, random3]
	).then(value => console.log("from all: " + value));

}

module.exports.call_race = function() {
	//calls all the promises at same time and
	//as soon as one is resolved it takes action through 'then' or 'catch'
	Promise.race(
		[random1, random2, random3]
	).then(value => console.log("from race: " + value));
}
