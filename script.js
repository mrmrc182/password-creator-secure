// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var characters = "`~!@#$%^&*()=+]}[{;:/?.>,<";
  // var options= 0;
  var output= "";
  var chooseUpper= false;
  var chooseLower = false;
  var chooseNumber = false;
  var chooseChar = false;
  var userLength = 0;


function generatePassword() {
  var password = " ";
  var userLength = prompt("How long do you want your password to be?");
  if (userLength < 5 || userLength > 128) {
    alert("Must pick a number between 5 and 128!");
    return "";
  }
  else{
    options = userLength;
    console.log(options);
  }
  var chooseLower = confirm("Do you want lowercase letters?");
  if (chooseLower === true){
    output = output + lowerCase;
    console.log(output);
  }

  var chooseNumber = confirm("Do you want numbers?");
  if (chooseNumber === true){
    output = output + numbers; 
    console.log("Choose number");
    console.log(output);
  }
  
  var chooseChar = confirm("Do you want special characters?");
  if (chooseChar === true){
    output = output + characters; 
    console.log("Choose character");
    console.log(output);
  }

  var chooseUpper = confirm("Do you want uppercase letters?");
  if (chooseUpper === true){
    output = output + upperCase; 
    console.log("Choose upper");
    console.log(output);
  }
  if(output === ""){
    alert("You must choose one option");
  }
  for (var i = 0; i < userLength; i++){
    password = password + output[Math.floor(Math.random() * userLength)];
  }

  return password;
}
  // TODO: add code to generate the password here

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 0) setup repo and commit starter code and deploy
// 1) prompt for password length
// 2) generate pw all "a"'s for the desired length
// 3) display all random lowercase letters for the chose length
// 4) display all random uppercase/lowercase letters
// 5) let user choose to include uppercase and/or lowercase
// 6) let user choose upper, lower, and/or numbers
// 7) let user choose upper, lower, numbers, and/or specials
// 8) prevent user from too short
// 9) prevent user from too short or too long
// 10) prevent user from choosing no character types
