// Assignment code here
let generateBtn = document.querySelector("#generate");
let usrForm = document.getElementById("pwdInputs");

generateBtn.addEventListener("click", showInputForm);
usrForm["pwdLength"].oninput = function () {
  writeInputValue(document.getElementById("labelSpanPwdLabel"), usrForm["pwdLength"].value);
}
usrForm["pwdNumeric"].oninput = function () {
  writeInputValue(document.getElementById("labelSpanPwdNumeric"), ((usrForm["pwdNumeric"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  validateCharTypeInput();
}
usrForm["pwdLower"].oninput = function () {
  writeInputValue(document.getElementById("labelSpanPwdLower"), ((usrForm["pwdLower"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  validateCharTypeInput();
}
usrForm["pwdUpper"].oninput = function () {
  writeInputValue(document.getElementById("labelSpanPwdUpper"), ((usrForm["pwdUpper"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  validateCharTypeInput();
}
usrForm["pwdSpecial"].oninput = function () {
  writeInputValue(document.getElementById("labelSpanPwdSpecial"), ((usrForm["pwdSpecial"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  validateCharTypeInput();
}
usrForm['continue'].onclick = function (event) {
  event.preventDefault();
  hideInputForm();
  writePassword();
}
function showInputForm() {
  navigator.clipboard.writeText('');
  document.getElementById("labelSpanFooter").innerHTML="";
  writeInputValue(document.getElementById("labelSpanPwdLabel"), usrForm["pwdLength"].value);
  writeInputValue(document.getElementById("labelSpanPwdNumeric"), ((usrForm["pwdNumeric"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  writeInputValue(document.getElementById("labelSpanPwdLower"), ((usrForm["pwdLower"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  writeInputValue(document.getElementById("labelSpanPwdUpper"), ((usrForm["pwdUpper"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  writeInputValue(document.getElementById("labelSpanPwdSpecial"), ((usrForm["pwdSpecial"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  validateCharTypeInput();
  usrForm.classList.add("show");
}
function hideInputForm() {
  usrForm.classList.remove("show");
}

function writeInputValue(spanElement, value) {
  spanElement.innerHTML = "(" + value + ")";
}

function validateCharTypeInput() {
  if (usrForm['pwdNumeric'].value === "0" && usrForm['pwdLower'].value === "0" &&
    usrForm['pwdUpper'].value === "0" && usrForm['pwdSpecial'].value === "0") {
    usrForm['pwdNumeric'].parentNode.classList.add("red-border");
    usrForm['pwdLower'].parentNode.classList.add("red-border");
    usrForm['pwdUpper'].parentNode.classList.add("red-border");
    usrForm['pwdSpecial'].parentNode.classList.add("red-border");
    usrForm['continue'].disabled = true;
  } else {
    usrForm['pwdNumeric'].parentNode.classList.remove("red-border");
    usrForm['pwdLower'].parentNode.classList.remove("red-border");
    usrForm['pwdUpper'].parentNode.classList.remove("red-border");
    usrForm['pwdSpecial'].parentNode.classList.remove("red-border");
    usrForm['continue'].disabled = false;
  }
}
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  writeInputValue(document.getElementById("labelSpanFooter"),"Password automatically copied to clipboard");
  navigator.clipboard.writeText(password);
}
function generatePassword() {
  let passWord = "";
  let numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"];
  let passwordArray = [];
  if (usrForm['pwdNumeric'].value === "1") {
    passwordArray = passwordArray.concat(numericChars);
    passWord += numericChars[Math.floor(Math.random() * numericChars.length)]
  }
  if (usrForm['pwdLower'].value === "1") {
    passwordArray = passwordArray.concat(lowerChars);
    passWord += lowerChars[Math.floor(Math.random() * lowerChars.length)]
  }
  if (usrForm['pwdUpper'].value === "1") {
    passwordArray = passwordArray.concat(upperChars);
    passWord += upperChars[Math.floor(Math.random() * upperChars.length)]
  }
  if (usrForm['pwdSpecial'].value === "1") {
    passwordArray = passwordArray.concat(specialChars);
    passWord += specialChars[Math.floor(Math.random() * specialChars.length)]
  }
  let initialPassLength = passWord.length;
  for (let i = 1; i <= (parseInt(usrForm['pwdLength'].value) - initialPassLength); i++) {
    passWord += passwordArray[Math.floor(Math.random() * passwordArray.length)]
  }
  return shufflePassword(passWord.split(''));
}

function shufflePassword(password) {
  for (var i = password.length - 1; i > 0; i--) {
      var rand = Math.floor(Math.random() * (i + 1));
      [password[i], password[rand]] = [password[rand], password[i]]
  }
  return password.join('');
}