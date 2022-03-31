// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var chooseLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = [0,1,2,3,4,5,6,7,8,9];
var characters = "`~!@#$%^&*()=+]}[{;:/?.>,<";

function generatePassword() {
    var userInput = Number(prompt("How long do you want your password to be?"));
    if(userInput.length <= 5 && userInput.length > 128){
     alert("Great!");
    }
    else{
    alert("Must pick a number between 5 and 128");
    }
    var password = lowerCase.length;
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var lowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];


  // TODO: add code to generate the password here
  var upper = confirm("Would you like upper case letters?");
  if (upper === true){
    userInput.length
  }
  var chooseLowerCase = confirm("Do you want to include lowercase letters?");
  var numbers = confirm("Do you want numbers?");
  var chooseCharacters = confirm("Do you want special characters?");

  return password;
}
generatePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "aaaaaa";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
