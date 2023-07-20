



// Click the generate password button
// All code will be written within the writePassword function.

// Prompt shows up asking users HOW MANY CHARACTERS they want
// Must be 8 or more characters and less than or equal to 128 characters
// Create a variable that will hold the user's response to a prompt.
// var input = prompt("How many characters would you like your password to contain?");
// if statement to check whether the user input is LESS THAN 8 or MORE THAN 128
// If less than 8, send alert('Password length must be at least 8 characters');
// if more than 129, send alert('Password length must be no more than 128 characters')
// program stops.

// Series of confirms asking the user whether they want to include certain categories of characters (numers, upper, lower, special)
// Create logic for how we want to handle when a user says YES to certain categories, and when they say NO to other categories.
// var lowerCase = confirm('Click OK to confirm including lowercase characters.)
// var upperCase = confirm('Click OK to confirm including uppercase characters.)
// var specialChars = confirm('Click OK to confirm including special characters.)
// var numbers = confirm('Click OK to confirm including numerical characters.)
// if statements based on user character selection (only need to account for a positive, yes I want these character)

// create an array that contains characters for each category
// lowerArr = ['a', 'b', 'c']
// upperArr = ['A', 'B', 'C']
// specialArr = ['!', '@', '#']
// numArr = [1, 2, 3]
// options = empty array  var = []

// Logic to EXCLUDE arrays based on what the users want or not
// ex. If lowerCase === true, randomly select characters from the lowerArr.

// Randomly select characters from each array (Look up how to create a random number)
// Math.floor(Math.random() + arr.length)

// Store all of the randomly selected characters, from the various arrays, into a new ARRAY?
// for loop for length of password, exp if they say they want 8 characters run for loop 8 times,
// store character selected from for loop in a variable and call it user selection

var generatedPassArr = ['!', 2]; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

var generatedPass = '!2';

// Password is generated and displayed on the screen
// Don't touch the following lines:
// var passwordText = document.querySelector("#password");
// passwordText.value = password;
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";
var specialCharacters = "!@#$%^&*()_+";
var possiblePassword = ""
// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var length = parseInt (prompt('How many characters do you want?'));
  if (length < 8 || length > 128 || isNaN(length)) {
    // if length is not a number above.
    alert('wrong, please enter a number between 8-128');
    generatePassword();
  }
  var lowerCase = confirm('Do you need lower case characters?');
  var upperCase = confirm('Do you need upper case characters?');
  var numbers = confirm('Do you need numbers?');
  var specialChar = confirm('Do you need special characters?');
  var generatedPassword = "";
  if (lowerCase == false && upperCase == false && numbers == false && specialChar == false) {
    alert('Please choose at least one option');
    generatePassword()
  }

  else if (lowerCase == true || upperCase == true || numbers == true || specialChar == true) {

    if (lowerCase == true) {
      possiblePassword = possiblePassword + lowerCaseChar
    } 
    if (upperCase == true) {
      possiblePassword = possiblePassword + upperCaseChar
      }
    if (specialChar == true) {
      possiblePassword = possiblePassword + specialCharacters
    }  
    if (numbers == true) {
      possiblePassword = possiblePassword + numberChar
    } 
    
    for (let index = 0; index < length; index = index + 1) {
     generatedPassword = generatedPassword + possiblePassword[Math.floor(Math.random() * possiblePassword.length )]
    
   }
   
  } 
   return generatedPassword;
}
// Write password to the #password in'put
function writePassword() {
var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

possiblePassword = ""
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

