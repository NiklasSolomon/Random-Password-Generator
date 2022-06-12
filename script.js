// What sort of data does my application need to work?

// Storing all needed characters in variables.

// numbers
var numbers = []

// special characters
var specialChar = []

// lower case letters
var lowercase = []

// upper case letters
var uppercase = []

// What sorts of actions/tasks does my code need to complete?

// Generate a password
function generatePassword() {

    // `Prompt` the user for their `passwordLength` and store it in a variable

  // Validate the password length and make sure it's a number between or equal to 8 and 128

      // IF `passwordLength` is greater than or equal to 8 and less than or equal to 128

      // IF `passwordLength` is less than 8 or greater than 128

    if( true ) {
      // end the function early
      return "";
    }
    
    // Prompt the user for if they want special characters and store it in a variable

    // Prompt the user for if they want numbers and store it in a variable

    // Prompt the user for if they want lower case and store it in a variable

    // Prompt the user for if they want upper case and store it in a variable

    // Validate that at least one character choice is true
    if ( !var && !var && !var && !var) {
      // Alert the user they had bad data
      return;
    }
      
    // Declare new empty array to store the characters we want to use

    var myArray = [];

    

    // IF `specialCharacters` is true

    //Combine `specialCharacters` with `characters`
    myArray = myArray.concat(things);
    //Array concat method to join together into one array

    // DECLARE a new empty string to store the password characters.

    // for( i = 0; i < passwordLength; i++ )

      // Randomly select characters

      // Adding that character to a building password string

    // Return the completed string

  

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
