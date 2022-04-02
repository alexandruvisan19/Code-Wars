const myArray = [1, 2, 3, 4, 5, 1, 2];
const mySet = new Set(myArray);

// console.log(mySet.size);
const a = {};
const b = {};

const myMap = new Map([
	[a, "a"],
	[b, "b"],
]);

myMap.set({}, "c");

console.log(myMap);
