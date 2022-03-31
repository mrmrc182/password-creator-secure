// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var chooseLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = "`~!@#$%^&*()=+]}[{;:/?.>,<";

function generatePassword() {
  var password = "";
  var userInput = Number(prompt("How long do you want your password to be?"));
  if (userInput <= 5 || userInput > 128) {
    alert("Must pick a number between 5 and 128!");
  }
  else {
    alert("Great!");
  }


  // TODO: add code to generate the password here

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
