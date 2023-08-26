// Assignment Code
uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[']

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var uppercaseConfirm = confirm("Do you want to include uppercase letters in your password?");
  alert(uppercaseConfirm);
  var lowercaseConfirm = confirm("Do you want to include lowercase letters in your password?");
  alert(lowercaseConfirm);
  var numbersConfirm = confirm("Do you want to include numbers in your password?");
  alert(numbersConfirm);
  var specialCharactersConfirm = confirm("Do you want to include special characters in your password?");
  alert(specialCharactersConfirm);
  var passwordLengthPrompt = prompt("Choose the length of your password. Type th enumber between 8 and 128.");
  alert(passwordLengthPrompt);

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
