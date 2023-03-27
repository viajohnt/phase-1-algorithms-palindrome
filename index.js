function isPalindrome(word) {
  // Write your algorithm here
  if (word.split('').reverse().join('') === word) {
    return true;
  } else {
    return false;
  }
  
}




/* 
  Add your pseudocode here
// Create a function that returns a string true if the words are able to be read
the same forwards and backwards.
If it is not, return false.

/*
  Add written explanation of your solution here
  The function first spliets the word "r a c e c a r", then it reverses the string,
  then it checks if the reversed string is equal to the original string.
  If it is, return true, if it is not, return false.
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

