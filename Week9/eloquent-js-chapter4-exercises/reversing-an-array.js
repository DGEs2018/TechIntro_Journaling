/**
 * Write a function that takees an array as an argument and produces new array with the same elements but in reverse order
 */
function reversingAnArray(array) {
	// Get ready an empty array to be filled up with the each element
	let emptyArray = [];
	// Cycle through the elements starting from the last of the index / last element backward
	for (let i = array.length - 1; i >= 0; i--) {
		// push each of the elements in the input array to the empty container
		emptyArray.push(array[i]);
	}
	// return the now 'filled' empty Array
	return emptyArray;
}

console.assert(reversingAnArray([ 'A', 'B', 'C' ]), 'Retry!'); // should give → ["C", "B", "A"];

/**
  * Write another one modifying the array given as argument by reversing its elements.
  */
function reverseArrayInPlace(otherArr) {
	// let count = 0;
	for (let i = 0; i <= Math.floor(otherArr.length / 2); i++) {
		// store the ith position of the input temporarily in the variable firstOne
		let firstOne = otherArr[i];

		// set the first with its mirror last element
		otherArr[i] = otherArr[otherArr.length - 1 - i];

		// set the last element minus the current element's position to match to the already temporarily old defined one (firstOne)
		otherArr[otherArr - 1 - i] = firstOne;
	}
	// return the now in place reversed array
	return otherArr;
}

let arrayValue = [ 1, 2, 3, 4, 5 ];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
