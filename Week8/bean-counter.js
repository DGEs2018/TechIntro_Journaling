/*
Write a function that takes in two string parameters, with the second one containing one of the
string characters to be counted. 
*/
function countChar(string, character) {
	let charQuantity = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] == character) {
			charQuantity += 1; // with return (charQuantity += 1), it counted repeated characters as single
		}
	}
	return charQuantity;
}
function countBs(string) {
	// this function makes use of the countBs function to get the count of the character.
	return countChar(string, 'B');
}

console.log(countChar('space test', ' ')); // should return 1
console.log(countChar('Bamboo', 'o')); // should return 2