function capitalize(str) {
  return str.toUpperCase();
}

function exclaim(str) {
  return str + "!";
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  let last = str.length - 1;
  return str[last];
}

function oneCharacter(str, num) {
  return str[num];
} 

function twoCharacters(str, num1, num2) {
  return str[num1] + str[num2];
}

function initials(str) {
  let index = str.indexOf(' ');
  return str[0] "." + str[index + 1] + ".";
}

function yeller(str) {
  let cap = capitalize(str);
  return exclaim(cap);
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};