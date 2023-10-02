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