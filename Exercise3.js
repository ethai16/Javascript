function lvl3exercise1() {
	// Create a "hello" and a "world", return the concatenation of the two
    var string1 = "hello"
    var string2 = "world"
    var together = string1 + " " + string2
    return together
}

console.log(lvl3exercise1())

function lvl3exercise2() {
	// Create a "hello" and a 12, return the concatenation of the two
    var string1 = "hello";
    var num = 12
    var together = string1 + " " + num
    return together
}

console.log(lvl3exercise2());

function lvl3exercise3() {
	// Create a variable that equals 12 and convert it to a string with concatenation. Return it.
    var pea = 12;
    var pea = "I like peas!";
    return pea
}

console.log(lvl3exercise3());

function lvl3exercise4() {
	// Create a "hello world!" string. Return the length of the string
    var string = "hello world!"
    var lengthString = string.length;
    return lengthString
}

console.log(lvl3exercise4());

function lvl3exercise5() {
	// Create a "hello world!" string. Return the index of the word "world".
    var string = "hello world!";
    var myArray = string.split(" ");
    var world = myArray.indexOf('world!')
    return world
}

console.log(lvl3exercise5());