// Assignment code here
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

  let special = confirm("include special characters? ('ok' for yes and 'cancel' for no)");
  console.log("The user wants special characters: " + special);
  if (special) {
    typeCount++;
  }

  console.log("the user has chosen " + typeCount + " different character types");

  if (typeCount == 0) {
    window.alert("Sorry, you need at least one character type. Please try again.");
    return;
  }

  let ranChar = function (x, y) {
    for (let i = 0; i < x; i++) {
      orderedPw += y.charAt(Math.floor(Math.random() * (y.length - 1)));
    }
  }

  if (lowercase) { 
    if (typeCount == 1) {
      numLowercase = userLength; 
      userLength = 0;
    } else {
      numLowercase = Math.floor(Math.random() * (userLength - typeCount) + 1);
      userLength = userLength - numLowercase; 
    }
    ranChar(numLowercase, lowerList);
    typeCount--; 
    console.log(numLowercase + " lowercase, " + userLength + " characters left, " + typeCount + " password types left");
  }

  if (uppercase) {
    if (typeCount == 1) {
      numUppercase = userLength;
      userLength = 0;
    } else {
      numUppercase = Math.floor(Math.random() * (userLength - typeCount) + 1);
      userLength = userLength - numUppercase;
    }
    ranChar(numUppercase, upperList);
    typeCount--;
    console.log(numUppercase + " uppercase, " + userLength + " characters left, " + typeCount + " password types left");
  }

  if (number) {
    if (typeCount == 1) {
      numNumber = userLength;
      userLength = 0;
    } else {
      numNumber = Math.floor(Math.random() * (userLength - typeCount) + 1);
      userLength = userLength - numNumber;
    }
    ranChar(numNumber, numberList);
    typeCount--;
    console.log(numNumber + " numbers, " + userLength + " characters left, " + typeCount + " password types left");
  }

  if (special) {
    if (typeCount == 1) {
      numSpecial = userLength;
      userLength = 0;
    } else {
      numSpecial = Math.floor(Math.random() * (userLength - typeCount) + 1);
      userLength = userLength - numSpecial;
    }
    ranChar(numSpecial, specialList);
    typeCount--;
    console.log(numSpecial + " special characters, " + userLength + " characters left, " + typeCount + " password types left");
  }

  console.log("lowercase:" + numLowercase + " uppercase:" + numUppercase + " numbers:" + numNumber + " special characters:" + numSpecial); 
  console.log("ordered password: " + orderedPw);




  
  let shufflePw = orderedPw.split(""); 
  let a, b, c 
  for (a = 0; a < shufflePw.length; a++) { 
    b = Math.floor(Math.random() * (shufflePw.length - 1));
    c = shufflePw[a]; 
    shufflePw[a] = shufflePw[b]; 
    shufflePw[b] = c; 
  }

  let password = shufflePw.join(""); 

  document.querySelector("#password").value = password;
}


generateBtn.addEventListener("click", writePassword);