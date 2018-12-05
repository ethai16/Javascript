// function madlib(name, subject){
//     var string = name + "'s" + " favorite subject in school is " + subject + ".";
//     return string 
// }

// console.log(madlib('Erick','math'))

// function tipAmount(bill, service){
//     switch (service) {
//         case "good":
//             percentage = .20
//             break;
//         case "fair":
//             percentage = .15
//             break;
//         case "bad":
//             percentage = .10
//             break;
//         default:
//             percentage = 0
//             break;
//     }

//     var tip = bill * percentage
//     return tip
// }

// console.log(tipAmount(50, "bad"));

// function totalAmount(bill, service){
//     switch (service) {
//         case "good":
//             percentage = .20
//             break;
//         case "fair":
//             percentage = .15
//             break;
//         case "bad":
//             percentage = .10
//             break;
//         default:
//             percentage = 0
//             break;
//     }

//     var tip = bill * percentage
//     var totalBill = tip + bill
//     return totalBill
// }

// console.log(totalAmount(50, "bad"));

// function printNumbers(startNumber, endNumber){
//     console.log(startNumber)
//     while(startNumber<endNumber){
//         startNumber++;
//         console.log(startNumber)
//     }
// }

// console.log(printNumbers(6,25));

// function printSquare(size){
//     for (var i=0; i < size; i++){
//         var string = "*"
//         console.log(string.repeat(size))
//     }
// }

// printSquare(5);

// function printBox(width,height){
//     var string = "*"
//     var space = " "
//     for (var i = 0; i < height; i++){
//         if (i == 0 || i == height-1){
//             console.log(string.repeat(width))
//         }else{
//             console.log("*" + space.repeat(width-2) + "*")
//         }
//     }
// }

// printBox(10,5)

// function printBanner(string){
//     var shape = "*"
//     for (var i = 0; i < 3; i++){
//         if (i == 0 || i == 2){
//             console.log(shape.repeat(string.length + 2))
//         }else{
//             console.log("*" + string + "*")
//         }
//     }
// }

// printBanner("hello world")




// function leetSpeak(string){
//     stringLeet = string.toUpperCase();
//     stringLeet = stringLeet.replace(/E/g, "3");
//     stringLeet = stringLeet.replace(/A/g, "4");
//     stringLeet = stringLeet.replace(/G/g, "6");
//     stringLeet = stringLeet.replace(/I/g, "1");
//     stringLeet = stringLeet.replace(/O/g, "0");
//     stringLeet = stringLeet.replace(/S/g, "5");
//     stringLeet = stringLeet.replace(/T/g, "7");
//     return stringLeet
// }

// console.log(leetSpeak("leet"))

// function longLongVowels(word){
//     if (word.includes("ee") == true){
//         var x = word.indexOf("ee");
//         var newWord = word.slice(0,x)+ word.slice(x,0) + "eee" + word.slice(x,word.length);
//     }else if (word.includes("oo") == true){
//         var x = word.indexOf("oo");
//         var newWord = word.slice(0,x)+ word.slice(x,0) + "ooo" + word.slice(x,word.length);
//     }else{
//         var newWord = word
//     }
//     return newWord
// }

// console.log(longLongVowels("taco"));

function positiveNumbers(numArray){
    var positiveArray = [];
    var negativeArray = [];
    var zeroArray = [];
    for(var i = 0 ; i < numArray.length; i++) {
        if (numArray[i] > 0){
            positiveArray.push(numArray[i])
        } else if (numArray[i]< 0) {
            negativeArray.push(numArray[i])
        } else {
            zeroArray.push(numArray[i])
        }
    }
    return positiveArray
}

numbers = [-2,-23,-5,3,-4,5,10,22];

console.log(positiveNumbers(numbers))