uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];

// selects the button element
var generateBtn = document.querySelector("#generate");

// generates password based on user input and writes it to html element
function writePassword() {
  var [uppercaseConfirm, lowercaseConfirm, numbersConfirm, specialCharactersConfirm] = confirmPasswordCriteria();
  var passwordLength = promptPasswordLength();
  var characterSets = selectedCharacterSets(uppercaseConfirm, lowercaseConfirm, numbersConfirm, specialCharactersConfirm);
  var password = generatePassword(passwordLength, characterSets);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// user chooses which character types to include in the password
// if user doesn't choose any characters they are told they need at least one type and the function runs again
function confirmPasswordCriteria() {
  var uppercaseConfirm = confirm("Do you want to include uppercase letters in your password?");
  var lowercaseConfirm = confirm("Do you want to include lowercase letters in your password?");
  var numbersConfirm = confirm("Do you want to include numbers in your password?");
  var specialCharactersConfirm = confirm("Do you want to include special characters in your password?");
  
  if (uppercaseConfirm === false && lowercaseConfirm === false && numbersConfirm === false && specialCharactersConfirm === false) {
    alert("Please confirm at lease one password criteria.");
    return confirmPasswordCriteria();
  }
  return [uppercaseConfirm, lowercaseConfirm, numbersConfirm, specialCharactersConfirm];
}

// user chooses the length of the password
// if the user chooses length less than 8 or more than 128 characters 
// or if they type in a character that is not a number
// they are told to try again and the function runs again
function promptPasswordLength() {
  var passwordLengthPrompt = prompt("Choose the length of your password. Type the number between 8 and 128.", "enter number here");
  var passwordLength = Number(passwordLengthPrompt);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLengthPrompt) === true) {
    alert("Your entry is not valid. Please choose number between 8 and 128.");
    return promptPasswordLength();
  }
  return passwordLength;
}

// makes an array of character sets depending on the user input
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
  return characterSets;
}

function getRandomElement(array) {
  var randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

// makes an array of numberOfCharacters random elements 
function getMultipleRandomElements (array, numberOfCharacters) {
  var randomElements = [];
  for (var i = 0; i < numberOfCharacters; i++) {
    randomElements.push(getRandomElement(array));
  }
  return randomElements;
}

// generates password of given length
// using characters from given array of characterSets
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

generateBtn.addEventListener("click", writePassword);