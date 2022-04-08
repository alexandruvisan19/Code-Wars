// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

function catMouse(x) {
	if (x.match(/[.]+/) == null) {
		return "Caught!";
	} else if (x.match(/[.]+/)[0].length > 3) {
		return "Escaped!";
	} else {
		return "Caught!";
	}
}

console.log("C.....m".length);
console.log(catMouse("C.....m"));

// describe("Cat and Mouse - Easy Version", () => {
// 	it("Testing for fixed tests", () => {
// 	  assert.strictEqual(catMouse('C....m'), "Escaped!");
// 	  assert.strictEqual(catMouse('C..m'), "Caught!");
// 	  assert.strictEqual(catMouse('C.....m'), "Escaped!");
// 	})
//   });
