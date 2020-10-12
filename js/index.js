//ITERATION 1
  //1.1 Create a variable `hacker1` with the driver's name.
  const hacker1 = "Laura";

  //1.2 Print `"The driver's name is XXXX"`.
  console.log("Driver's name -->", hacker1);

  //1.3 Create a variable `hacker2` with the navigator's name.
  const hacker2 = "Pablo";

  //1.4 Print `"The navigator's name is YYYY"`.
  console.log("Navigator's name -->", hacker2);

//ITERATION 2: Conditionals
//Depending on which name is longer print different outputs

let hacker1Length = hacker1.length;
let hacker2Length= hacker2.length;

console.log("Driver's name length -->", hacker1Length);
console.log("Navigator's name length -->",  hacker2Length);
 
if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
} else if (hacker1Length < hacker2Length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

//ITERATION 3: Loops 
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" 

    let driverNameUpperCase = hacker1.toUpperCase().split("");
    console.log(driverNameUpperCase);

    // Using for...of Loop
    for ( let nameUpperCase of driverNameUpperCase) {
        console.log(nameUpperCase.split(""));
    }

    // Using for loop
    for (i = 0; i < driverNameUpperCase.length; i++ ) {
      console.log(driverNameUpperCase[i]);
    } 

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

    console.log(hacker1.length -1);

    // Reverse a String With a Decrementing For Loop
    for (i= hacker1Length -1; i >= 0; i--){
      console.log(hacker1[i]);
    }

    // With a function - Reverse a String With a Decrementing For Loop

    let newStr = "";

    function reverseString(str) {
      for (i = str.length -1; i >= 0; i--){
        newStr += str[i];
      }
      return newStr;
    }

    reverseString("Eli");
    console.log(newStr);

    //Reverse a String With Built-In Functions
  
    function reverseString2(str) {
      let splitString = str.split("");
      //console.log(splitString);
      let reverseStr = splitString.reverse();
      //console.log(reverseStr);
      let joinStr = reverseStr.join("");
      //console.log(joinStr);
      return joinStr
    }
    
    console.log(reverseString2("Elisenda"));


//3.3 Depending on the lexicographic order of the strings, print:

  // strings being: hacker1 = "Laura" & hacker2 = "Pablo"

    if (hacker1.localeCompare(hacker2) === -1) {
      console.log("The driver's name goes first.");
    } else if (hacker1.localeCompare(hacker2) === 1){
      console.log("Yo, the navigator goes first definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }

/*BONUS 1
    Go to lorem ipsum generator and:

      1. Generate 3 paragraphs. Store the text in a variable type of string.
      2. Make your program count the number of words in the string.
      3. Make your program count the number of times the Latin word et appears.
    
*/
    const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ligula et sem sodales convallis. Mauris elit dui, dictum et est vel, placerat mollis risus. Phasellus ac convallis lectus. Sed scelerisque nisi sit amet lobortis maximus. Suspendisse potenti. Aenean vitae mauris in nisl posuere sagittis quis sed ante. Curabitur vel rhoncus mi. Etiam quis lacus ullamcorper, tristique ligula vel, laoreet nibh. Duis vehicula ornare dolor, a euismod est dictum aliquet."

    function countStringWords(str) {
      let words = 0;
      let splitString = str.split(" ");
      let stringWords = splitString.length;
      return words += stringWords;
    }

      countStringWords(loremIpsumText);

      let countEtTimes = loremIpsumText.search("et");
      console.log(countEtTimes);

