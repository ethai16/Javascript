function lvl5exercise1() {
	// Push the string "hello" into the array and return it.
	var array = [1, "adam"];
    array.push("hello")
    return array
}
console.log(lvl5exercise1());

function lvl5exercise2() {
	// Remove the last element from the array and return it
	var array = [1, "adam"];
    var last = array.pop()
    return last
}

console.log(lvl5exercise2())

function lvl5exercise3() {
	// Return the length of the array
	var array = [1, "adam"];
    var lengthArray = array.length;
    return lengthArray
}
console.log(lvl5exercise3());

function lvl5exercise4() {
	// Return the index of "adam" in the array
    var array = [1, "adam"];
    return array.indexOf("adam")
}
console.log(lvl5exercise4())
