// Assignment Code
uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[']

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var numberOfCriteriaSelected = confirmPasswordCriteria(numberOfCriteriaSelected)
  var passwordLength = promptPasswordLength()

  var password = generatePassword(passwordLength, numberOfCriteriaSelected);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function confirmPasswordCriteria() {
  var numberOfCriteriaSelected = 0

  var uppercaseConfirm = confirm("Do you want to include uppercase letters in your password?");
  var lowercaseConfirm = confirm("Do you want to include lowercase letters in your password?");
  var numbersConfirm = confirm("Do you want to include numbers in your password?");
  var specialCharactersConfirm = confirm("Do you want to include special characters in your password?");
  
  if (uppercaseConfirm === false && lowercaseConfirm === false && numbersConfirm === false && specialCharactersConfirm === false) {
    alert("Please confirm at lease one password criteria.");
    writePassword()
  }
  
  var listOfCriteria = [uppercaseConfirm, lowercaseConfirm, numbersConfirm, specialCharactersConfirm]

  for (criteria of listOfCriteria) {
    if (criteria === true) {
      numberOfCriteriaSelected += 1
    }
  
  }
  console.log(numberOfCriteriaSelected)
  return numberOfCriteriaSelected
}

function promptPasswordLength() {
  var passwordLengthPrompt = prompt("Choose the length of your password. Type the number between 8 and 128.", "enter number here");
  var passwordLength = Number(passwordLengthPrompt);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLengthPrompt) === true) {
    alert("Your entry is not valid. Please choose number between 8 and 128.");
    return promptPasswordLength();
  }
  console.log(passwordLength)
  return passwordLength;
}

function generatePassword(passwordLength, numberOfCriteriaSelected) {
  var numberOfCharacters = passwordLength / numberOfCriteriaSelected;
  console.log(numberOfCharacters)
} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// (Number(passwordLengthPrompt) === NaN)