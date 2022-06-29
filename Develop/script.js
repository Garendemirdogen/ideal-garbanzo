// Generate password button reference

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var passwordText = document.querySelector("#password");

  var newPassword;

  
// Generate password function

function generatePassword() {

// Ask the user how many characters they want the password to be
var length = prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128.");
       
// If user inputs anything outside or requested range prompt will appear 
  if (length < 8 || length > 128) {
         
    alert("Minimum/Maximum character criteria was not met. Please choose a number between 8 and 128 characters.");
         
    length = prompt("How many characters would you like your password to contain? Please pick a number between 8 and 128.");
       };
  
  if (isNaN(length) === true) {
      
    alert("Please choose a number between 8 and 128 characters.");
         
    length = prompt("How many characters would you like your password to contain? Please pick a number between 8 and 128.");
       };
   
// Prompts the user what type of character the user would like to use in the password
  var lowercaseConfirm = confirm("If you would like lowercase characters in your password, click OK.");
      
  var uppercaseConfirm = confirm("If you would like uppercase characters in your password, click OK.");
      
  var numberConfirm = confirm("If you would like numbers in your password, click OK.");
      
  var specialConfirm = confirm("If you would like special characters in your password, click OK.");


// Lowercase characters
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";

// Uppercase characters
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Numerical characters
var number = "123456789";

// Special characters
var special = "!#$%&'()*+,-./:;<=>?@[\]^{|}`_~";


//  Empty string to store the types of characters the user wants to use

var selectedCharacters = "";

// Empty string to create new password 

newPassword = "";


// Characters user selects after prompts 

      if (lowercaseConfirm === true) {

          selectedCharacters = selectedCharacters.concat(alphabetLower);
      };

      if (uppercaseConfirm === true) {

          selectedCharacters = selectedCharacters.concat(alphabetUpper);
      };

      if (numberConfirm === true) {

          selectedCharacters = selectedCharacters.concat(number);
      };
      
      if (specialConfirm === true) {

          selectedCharacters = selectedCharacters.concat(special);
      };
          
// Randomly selected characters generates a password of selected characters and selected length for the user

  for (i = 0; i < length; i++) {

    var charType = selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));

      newPassword = newPassword + charType;
  };

};

// Function call
generatePassword()

// New password will appear in text box
passwordText.value = newPassword;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);