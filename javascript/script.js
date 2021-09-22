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

const UPPERCASE = [...Array(26)].map((val,i) => String.fromCharCode(i+65));
const LOWERCASE = UPPERCASE.map(letter => letter.toLowerCase());
const NUMERIC = [...Array(10)].map((val,i) => String.fromCharCode(i+48));
const SPECIAL_CHARS = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")",
  "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",
  "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function check_length(length) {
  if ((length >= 8) && (length <= 128)) {
    return true;
  }
  return false;
}

function check_options(uppercase, lowercase, numeric, special) {
  return uppercase || lowercase || numeric || special;
}

function create_char_array(uppercase, lowercase, numeric, special) {
  const char_array = [];
  if (uppercase) {
    char_array.push(UPPERCASE);
  }
  if (lowercase) {
    char_array.push(LOWERCASE);
  }
  if (numeric) {
    char_array.push(NUMERIC);
  }
  if (special) {
    char_array.push(SPECIAL_CHARS);
  }
  flatten_array = char_array.flat();
  return flatten_array;
}

module.exports.check_length = check_length;
module.exports.check_options = check_options;
module.exports.create_char_array = create_char_array;