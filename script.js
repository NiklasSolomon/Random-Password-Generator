// Generate a password
function generatePassword() {
  
// What sort of data does my application need to work?
// Storing all needed characters in variables.

// numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// special characters
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*",]

// lower case letters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// upper case letters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// What sorts of actions/tasks does my code need to complete?
var length;
var okUpper;
var okLower;
var okNumbers;
var okSpecial;


// `Prompt` the user for their `passwordLength` and store it in a variable
length = window.prompt("Enter desired password length.", "");

// Validate the password length and make sure it's a number between or equal to 8 and 128
// IF `passwordLength` is greater than or equal to 8 and less than or equal to 128
// IF `passwordLength` is less than 8 or greater than 128

if (length >= 8 && length <= 128 ) {
  // Prompt the user for if they want numbers and store it in a variable
  okNumbers = window.confirm("Would you like to use numbers?\nClick OK to confirm.");
  // Prompt the user for if they want special characters and store it in a variable
  okSpecial = window.confirm("Would you like to use special characters?\nClick OK to confirm.");
  // Prompt the user for if they want lower case and store it in a variable
  okLower = window.confirm("Would you like to use lowercase letters?\nClick OK to confirm.");
  // Prompt the user for if they want upper case and store it in a variable
  okUpper = window.confirm("Would you like to use uppercase letters?\nClick OK to confirm.");
} else {
  alert("Please choose a password length between 8 and 128.")
  return "";
}

// Validate that at least one character choice is true
if ( !okNumbers && !okSpecial && !okLower && !okUpper) {
  // Alert the user they had bad data
  alert("Please select at least one type of character.")
  return "";
};
  
  // Declare new empty array to store the characters we want to use
  var characterArray = [];
  
  //Array concat method to join together into one array

  // IF `okSpecial` is true
  if (okSpecial) {
    //Combine `specialChar` with `characterArray`
    characterArray = characterArray.concat(specialChar);
  }
  
  if (okNumbers) {
    characterArray = characterArray.concat(numbers);
  }
  
  if (okLower) {
    characterArray = characterArray.concat(lowercase);
  }
  
  if (okUpper) {
    characterArray = characterArray.concat(uppercase);
  }
  
  // DECLARE a new empty string to store the password characters.
  var storedCharacters = [];

  for( i = 0; i <= length; i++ )
  // Randomly select characters
  // Adding that character to a building password string
  storedCharacters += characterArray[Math.floor(Math.random() *characterArray.length)];
    // Return the completed string
    return storedCharacters;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
