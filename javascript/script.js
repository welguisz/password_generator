function writePassword() {
  var passwordText = document.querySelector("#password");
  var length = document.querySelector("#length").value;
  var uppercase = document.querySelector("#uppercase").checked;
  var lowercase = document.querySelector("#lowercase").checked;
  var numeric = document.querySelector("#numeric").checked;
  var special = document.querySelector("#special").checked;
  var lengthError = document.querySelector("#length_error");
  var checkBoxError = document.querySelector("#checkbox_error");
  var validLength = check_length(length);
  var validOptions = check_options(uppercase, lowercase, numeric, special);
  if (validLength && validOptions) {
    var char_array = create_char_array(uppercase, lowercase, numeric, special);
    var password = create_password(length, char_array);
    passwordText.value = password;
  } else {
    passwordText.value = "not_good";
  }
  lengthError.hidden = validLength;
  checkBoxError.hidden = validOptions;
}

const UPPERCASE = [...Array(26)].map((val,i) => String.fromCharCode(i+65));
const LOWERCASE = UPPERCASE.map(letter => letter.toLowerCase());
const NUMERIC = [...Array(10)].map((val,i) => String.fromCharCode(i+48));
const SPECIAL_CHARS = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")",
  "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",
  "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function check_length(length) {
  return ((length >= 8) && (length <= 128));
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

function create_password(length, char_array) {
  let password = '';
  for(let i = 0; i < length; i++) {
    const rand_char = char_array[Math.floor(Math.random() * char_array.length)];
    password = password.concat(rand_char);
  }
  return password;
}

// module.exports.check_length = check_length;
// module.exports.check_options = check_options;
// module.exports.create_char_array = create_char_array;
// module.exports.create_password = create_password;

//window.onload = init;