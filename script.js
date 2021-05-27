var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword);

//define function that receives inputs from user and generates password
function generatePassword() {
  let length = Number(prompt("Choose a number of characters"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

  let upper = confirm("Would you like upper case letters?");
  let lower = confirm("Would you like lower case letters?");
  let num = confirm("Would you like numbers?");
  let sym = confirm("Would you like symbols?");

  //Fallback in case no character types are chosen
  while (!upper && !lower && !num && !sym) {
    alert("Please select at least one character type");
    let upper = confirm("Would you like upper case letters?");
    let lower = confirm("Would you like lower case letters?");
    let num = confirm("Would you like numbers?");
    let sym = confirm("Would you like symbols?");
  }

  let password = "";

// Using rando script to get random values
  let allowed = {};
  if (upper) password += rando(allowed.upper = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lower) password += rando(allowed.lower = "qwertyuiopasdfghjklzxcvbnm");
  if (num) password += rando(allowed.num = "1234567890");
  if (sym) password += rando(allowed.sym = "!@#$%^&*(){}[]=<>/,.");

  //Loop through password length and allowed characters to assemble password
  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);
  return password;
}
