// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(num){
    myArray =[];
    string = "hello"
    for (var i = 0; i < num; i++){
        myArray.push(string)
    }
    return myArray
}

console.log(finalFunction(5));