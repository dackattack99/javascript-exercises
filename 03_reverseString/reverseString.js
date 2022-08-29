const reverseString = function(string) {
  let newString = "";
  let charGet = "";
  for (let i=string.length-1; i>=0; i--) {
    charGet = string.charAt(i);
    newString += charGet;
  }
  return newString;


}

console.log(reverseString("Hello"));


// Do not edit below this line
module.exports = reverseString;
