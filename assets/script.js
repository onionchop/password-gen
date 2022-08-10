// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z']; 
var specialChar = ['!', '@', '#', '$', '%', '=', '&', '*', '?', ];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var userInput =[];
var userPassword = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generating Function
function generatePassword(){
  passwordLength = prompt("How many characters would you like in your password (between 8-128 characters required.)");
  console.log("Password length" + passwordLength);

  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please choose between 8 and 128");
    console.log("Password length " + passwordLength);

}  else { 
  confirmLower = confirm("Will this contain lower case letters? Click OK to confirm.");
  console.log("Lower case " + confirmLower);
  confirmUpper = confirm("Will this contain upper case letters? Click OK to confirm.");
  console.log("Upper case " + confirmUpper);
  confirmNumber = confirm("Will this contain numbers? Click OK to confirm.");
  console.log("Number " + confirmNumber);
  confirmSpecial = confirm("Will this contain special characters? Click OK to confirm.");
  console.log("Special Character " + confirmSpecial);

};

if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("You must choose a criteria");

} else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, numbers, specialChar);
  console.log(userChoices);
}

else if (confirmLower && confirmUpper && confirmNumber) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}
else if (confirmLower && confirmUpper && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, specialChar);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(numbers, specialChar);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = upperCase.concat(numbers, specialChar);
  console.log(userChoices);
}
else if (confirmLower && confirmUpper) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmLower && confirmSpecial) {
  userChoices = lowerCase.concat(specialChar);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmUpper && confirmSpecial) {
  userChoices = upperCase.concat(specialChar);
  console.log(userChoices);
}
else if (confirmNumber && confirmSpecial) {
  userChoices = numbers.concat(specialChar);
  console.log(userChoices);
}
else if (confirmLower) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (confirmUpper) {
  userChoices = blankUpper.concat(upperCase);
  console.log(userChoices);
}
else if (confirmNumber) {
  userChoices = numbers;
  console.log(userChoices);
}
else if (confirmSpecial) {
  userChoices = specialChar;
  console.log(userChoices);
};

// loop
var passwordBlank = [];
for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

// Join and return the password 
var password = passwordBlank.join("");
console.log("Your Pasword is: " + password);
return password;
}