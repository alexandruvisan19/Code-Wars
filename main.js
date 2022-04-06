class Espresso {
	constructor(test1, test2, test3, test4) {
		this.test1 = test1;
		this.test2 = test2;
		this.test3 = test3;
		this.test4 = test4;
	}
	test5() {
		console.log("make coffe");
	}
	test6() {
		console.log("add milk");
	}
}

let machinecoffe = new Espresso("alex", "ioana", "da", "nu");
console.log(machinecoffe.test2);
