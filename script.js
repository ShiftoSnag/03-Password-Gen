let generateBtn = document.querySelector("#generate");

let writePassword = function() {
  let typeCount = 0;
  let numLowercase = 0;
  let numUppercase = 0;
  let numNumber = 0;
  let numSpecial = 0;
  let lowerList = "abcdefghijklmnpqrstuvwxyz";
  let upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numberList = "1234567890";
  let specialList = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  let orderedPw = ""

  let userLength = prompt("Choose password length");
  while ((userLength < 8 || userLength > 128) || (isNaN(userLength))) {
    userLength = prompt("*length between 8 and 128");
  }
  console.log("The user chose a length of: " + userLength);

  let lowercase = confirm("include lowercase letters? ('ok' for yes and 'cancel' for no)");
  console.log("The user wants lowercase: " + lowercase);
  if (lowercase) {  
    typeCount++;
  }

  let uppercase = confirm("include uppercase letters? ('ok' for yes and 'cancel' for no)");
  console.log("The user wants uppercase: " + uppercase);
  if (uppercase) {
    typeCount++;
  }

  let number = confirm("include numbers? ('ok' for yes and 'cancel' for no)");
  console.log("The user wants numbers: " + number);
  if (number) {
    typeCount++;
  }