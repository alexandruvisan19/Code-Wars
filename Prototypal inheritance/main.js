let animal = {
	eats: true,
	set walk(test) {
		/* this method won't be used by rabbit */
	},
};

let rabbit = {
	__proto__: animal,
};

rabbit.walk = function () {
	console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
