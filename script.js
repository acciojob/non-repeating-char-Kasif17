function firstNonRepeatedChar(str) {
 // Write your code here
	return str
        .split('')
        .find(ch => str.indexOf(ch) === str.lastIndexOf(ch)) || null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
