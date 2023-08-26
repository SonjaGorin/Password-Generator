uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[']

var generateBtn = document.querySelector("#generate");

function writePassword() {

  var [uppercaseConfirm, lowercaseConfirm, numbersConfirm, specialCharactersConfirm] = confirmPasswordCriteria();
  var passwordLength = promptPasswordLength();
  var characterSets = selectedCharacterSets(uppercaseConfirm, lowercaseConfirm, numbersConfirm, specialCharactersConfirm);
  
  var password = generatePassword(passwordLength, characterSets);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function confirmPasswordCriteria() {
  var uppercaseConfirm = confirm("Do you want to include uppercase letters in your password?");
  var lowercaseConfirm = confirm("Do you want to include lowercase letters in your password?");
  var numbersConfirm = confirm("Do you want to include numbers in your password?");
  var specialCharactersConfirm = confirm("Do you want to include special characters in your password?");
  
  if (uppercaseConfirm === false && lowercaseConfirm === false && numbersConfirm === false && specialCharactersConfirm === false) {
    alert("Please confirm at lease one password criteria.");
    return confirmPasswordCriteria()
  }
  return [uppercaseConfirm, lowercaseConfirm, numbersConfirm, specialCharactersConfirm]
}

function promptPasswordLength() {
  var passwordLengthPrompt = prompt("Choose the length of your password. Type the number between 8 and 128.", "enter number here");
  var passwordLength = Number(passwordLengthPrompt);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLengthPrompt) === true) {
    alert("Your entry is not valid. Please choose number between 8 and 128.");
    return promptPasswordLength();
  }
  console.log(passwordLength);
  return passwordLength;
}

function selectedCharacterSets(uppercaseConfirm, lowercaseConfirm, numbersConfirm, specialCharactersConfirm) {
  var characterSets = []
  if (uppercaseConfirm === true) {
    characterSets.push(uppercaseLetters);
  } 
  if (lowercaseConfirm === true) {
    characterSets.push(lowercaseLetters);
  }
  if (numbersConfirm === true) {
    characterSets.push(numbers);
  }
  if (specialCharactersConfirm === true) {
    characterSets.push(specialCharacters);
  }
  console.log(characterSets);
  return characterSets;
}

function generatePassword(passwordLength, characterSets) {
  var numberOfCharacters = passwordLength / characterSets.length;
  var lastNumberOfCharacters = numberOfCharacters + passwordLength % characterSets.length;
  var passwordCharacters = [];
  var randomCharacters;

  for (var i = 0; i < characterSets.length; i++) {
    if (i < characterSets.length - 1) {
      randomCharacters = getMultipleRandomElements(characterSets[i], numberOfCharacters);
    } else {
      randomCharacters = getMultipleRandomElements(characterSets[i], lastNumberOfCharacters);
    }
    passwordCharacters.push(...randomCharacters);
  }
  var shuffledPassword = [...passwordCharacters].sort(() => 0.5 - Math.random()).join("");
  return shuffledPassword;
} 

function getMultipleRandomElements (array, numberOfCharacters) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  var chosenElements = shuffled.slice(0, numberOfCharacters)
  return chosenElements
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/*
inputs:
- character sets
- baseNumberOfCharacters
- remainder


Get the lenght of the password from the user
Get the types of characters user wants the password to contain
Divide length of the password with number of different types of characters user wants to use
That will give the number of characters to be used from each type
If there is a remainder, add that remainder to the number of characters to be used from the last type of char

for character set of character sets
  Shuffle chosen character sets 
  Slice shuffled sets using the number of char to be used

Build the password by joining sliced characters
Shuffle the password
Get password to appear on the screen
*/