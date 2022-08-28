function reverse(word){
  return word.split("").reverse().join("");
}
function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = reverse(word)
  return word === reverseWord
}

/* 
  Add your pseudocode here
  write afunction of isPalidnrome 
  if "mom" === "mom"
  returns true
  else if "pot" === "top"
  returns false
  */

/*
  Add written explanation of your solution here
  I tried coming up with a function that has a code of reverse method and give a variable,
   that in turn will be used by the isPalindrome function to campare the string argument
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
