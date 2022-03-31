// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var characters = "`~!@#$%^&*()=+]}[{;:/?.>,<";
  var password = "";
  var length= 0;
  var output= "";
  var chooseLower = false;
  var chooseNumber = false;
  
  var length = prompt("How long do you want your password to be?");
  if (length < 5 || length > 128) {
    alert("Must pick a number between 5 and 128!");
    return("");
  }
  var chooseUpper = confirm("Do you want uppercase letters?");
  if(chooseUpper = true){
    output = upperCase; 
    console.log("Choose upper");
    console.log(output);
  }
  else{
    output = ("");
    console.log("none");
  }
  
  password=output.repeat(length);

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
