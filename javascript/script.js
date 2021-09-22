// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

function check_length(length) {
  if ((length >= 8) && (length <= 128)) {
    return true;
  }
  return false;
}

function check_options(uppercase, lowercase, numeric, special) {
  return uppercase || lowercase || numeric || special;
}

module.exports.check_length = check_length;
module.exports.check_options = check_options;