// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var characters = "`~!@#$%^&*()=+]}[{;:/?.>,<";
  var options= 0;
  var output= "";
  var chooseUpper= false;
  var chooseLower = false;
  var chooseNumber = false;
  var chooseChar = false;
  var userLength = 0;
  var letters = 0;


function generatePassword() {
  var password = " ";
 userLength = prompt("How long do you want your password to be?");
  if (userLength < 5 || userLength > 128) {
    alert("Must pick a number between 5 and 128!");
    return "";
  }
  else{
    options = userLength;
  }
  
  var chooseLower = confirm("Do you want lowercase letters?");
  if (chooseLower === true){
    output = output + lowerCase;
  }
  var chooseUpper = confirm("Do you want uppercase letters?");
  if (chooseUpper === true){
    output = output + upperCase; 
  }
  var chooseNumber = confirm("Do you want numbers?");
  if (chooseNumber === true){
    output = output + numbers; 
  }
  var chooseChar = confirm("Do you want special characters?");
  if (chooseChar === true){
    output = output + characters; 
  }

  
  if(output === ""){
    alert("You must choose one option");
  }
  for (var i = 0; i < options; i++){
    password = password + output[Math.floor(Math.random() * output.length)];
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


