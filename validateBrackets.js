function validateBrackets(str) {
  let tested = str;

  let arrayFromTested = tested.split("");
  let openBigBracket = arrayFromTested.indexOf("{");
  let closeBigBracket = arrayFromTested.indexOf("}");
  let openMiddleBracket = arrayFromTested.indexOf("[");
  let closeMiddleBracket = arrayFromTested.indexOf("]");
  let openSmallBracket = arrayFromTested.indexOf("(");
  let closeSmallBracket = arrayFromTested.indexOf(")");

  let valid = true;

  if (
    (openBigBracket === -1 &&
      openMiddleBracket === -1 &&
      openSmallBracket == -1) ||
    (openBigBracket === -1 && closeBigBracket !== -1) ||
    (openMiddleBracket === -1 && closeMiddleBracket !== -1) ||
    (openSmallBracket === -1 && closeSmallBracket !== -1) ||
    (openBigBracket !== -1 && closeBigBracket === -1) ||
    (openMiddleBracket !== -1 && closeMiddleBracket === -1) ||
    (openSmallBracket !== -1 && closeSmallBracket === -1) ||
    closeBigBracket < openBigBracket ||
    closeMiddleBracket < openMiddleBracket ||
    closeSmallBracket < openSmallBracket ||
    (openMiddleBracket !== -1 && openMiddleBracket < openBigBracket) ||
    (openSmallBracket !== -1 && openSmallBracket < openBigBracket) ||
    (openSmallBracket !== -1 && openSmallBracket < openMiddleBracket) ||
    (closeBigBracket !== -1 && closeBigBracket < closeMiddleBracket) ||
    (closeBigBracket !== -1 && closeBigBracket < closeSmallBracket) ||
    (closeMiddleBracket !== -1 && closeMiddleBracket < closeSmallBracket)
  ) {
    valid = false;
  }

  return valid;
}

console.log(validateBrackets("{asd}"));
console.log(validateBrackets("[asd]"));
console.log(validateBrackets("(asd)"));

console.log(validateBrackets("{[asd]}"));
console.log(validateBrackets("{(asd)}"));
console.log(validateBrackets("[(asd)]"));

console.log(validateBrackets("{[(asd)]}"));

console.log(validateBrackets("[{asd}]"));
console.log(validateBrackets("({asd})"));
console.log(validateBrackets("([asd])"));

console.log(validateBrackets("{[asd}]"));
console.log(validateBrackets("[(asd})"));
console.log(validateBrackets("[(asd])"));

console.log(validateBrackets("[{asd]}"));
console.log(validateBrackets("({asd)}"));
console.log(validateBrackets("([asd)]"));

console.log(validateBrackets("{[(asd)]"));
console.log(validateBrackets("{[(asd)}"));
console.log(validateBrackets("{[(asd]}"));

console.log(validateBrackets("[(asd)]}"));
console.log(validateBrackets("{(asd)]}"));
console.log(validateBrackets("{asd)]}"));

// {asd} – true
// [asd] – true
// (asd) – true

// {[asd]} – true
// {(asd)} – true
// [(asd)] – true

// {[(asd)]} – true

// [{asd}] – false // big brackets in medium brackets
// ({asd}) – false // big brackets in small brackets
// ([asd]) – false // medium brackets in small brackets

// {[asd}] – false // there is closing big bracket, but the last closing bracket is medium
// [(asd}) – false // there is closing big bracket, but the last closing bracket is small
// [(asd]) – false // there is closing medium bracket, but the last closing bracket is small

// [{asd]} – false // there is opening big bracket, but the first opening bracket is medium
// ({asd)} – false // there is opening big bracket, but the first opening bracket is small
// ([asd)] – false // there is opening medium bracket, but the first opening bracket is small

// {[(asd)] – false // missing closing big bracket
// {[(asd)} – false // missing closing medium bracket
// {[(asd]} – false // missing closing small bracket

// [(asd)]} – false // missing opening big bracket
// {(asd)]} – false // missing opening medium bracket
// {asd)]} – false // missing opening small bracket
