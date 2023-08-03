
function isPalindrome(word) {
  let lWord = word.toLowerCase();
  let lWordRev = lWord.split('').reverse().join('');
  return lWord === lWordRev;
}

/* 
  Add your pseudocode here
  1. change all word strings into lowercase so palindrome can run with no problem.
  2. make it so spaces arent considered in the name //=> "taco cat" >/ "tac ocat" and instead would return "tacocat"
  3. split string by individual letters, reverse string, and join the letters again.
  4. see if palindrome works
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("taco cat"));
}

module.exports = isPalindrome;
