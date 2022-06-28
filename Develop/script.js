// Generate password button reference

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var passwordText = document.querySelector("#password");

  var newPassword;


// Global variables

var lengthConfirm;
var lowercaseConfirm;
var uppercaseConfirm;
var numberConfirm;
var specialConfirm;


// Lowercase characters
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";

// Uppercase characters
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Numerical characters
var number = "123456789";

// Special characters
var special = "!#$%&'()*+,-./:;<=>?@[\]^{|}`_~";

// Generate password function

var generatePassword = function(){

  // Declaration of varaible to prompt user to select a password length between 8 and 128 characters
  var lengthConfirmprompt = window.prompt("Please select the length of your password. Choose between 8 and 128 characters");

  // Converts a string into a number
    lengthConfirm = parseInt(lengthConfirmprompt); 

      if (lengthConfirmprompt === "" || lengthConfirm <= 8 || lengthConfirm >= 128) {

// Alert user to enter a number between 8 and 128 if no input is returned
        window.alert("Please enter a number between 8 and 128!");

          return generatePassword();
    }

      else if (lengthConfirmprompt === null) {
// Return user to the generate password window
        window.alert("You have selected cancel");
    }
    
      else {
// Prompts the user what type of character the user would like to use in the password
      lowercaseConfirm = confirm("If you wwould like lowercase characters in your password, click OK.");
      
        uppercaseConfirm = confirm("If you would like uppercase characters in your password, click OK.");
      
          numberConfirm = confirm("If you would like numbers in your password, click OK.");
      
            specialConfirm = confirm("If you would like special characters in your password, click OK.");

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
          
  }


// Randomly selected characters generates a password of selected characters and selected length for the user

  for (i = 0; i < length; i++) {

    var charType = selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));

      newPassword = newPassword + charType;
  };

};

// Function call
generatePassword();


passwordText.value = newPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);