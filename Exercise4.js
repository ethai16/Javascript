function lvl4exercise1() {
	// Return the boolean value "true"
    var thisIsTrue = true;
    return thisIsTrue
}

console.log(lvl4exercise1());

function lvl4exercise2() {
	// Return the boolean value "false"
    var thisIsFalse = false;
    return thisIsFalse
}

console.log(lvl4exercise2());

function lvl4exercise3(bool) {
	// Return the opposite of the input boolean value
    var newBool = !bool
    return newBool
}
console.log(lvl4exercise3(true));

function lvl4exercise4(bool1, bool2) {
	// Return the logical "and" of the input boolean values
    return bool1 && bool2
}
console.log(lvl4exercise4(false,true));

function lvl4exercise5(bool1, bool2) {
	// Return the logical "or" of the input boolean values
	return bool1 || bool2
}
console.log(lvl4exercise5(false,true));

function lvl4exercise6(bool1, bool2) {
	// Return the logical "equivalence" of the input boolean values
	return bool1 == bool2
}
console.log(lvl4exercise6(false,true));
