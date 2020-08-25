// write a function that counts the number of vowels in a given string and returns that value

const vowelCounter = function(data) {
  // Put your solution here
  let vowelNum = 0;
  let changeString = data.split('');

  changeString.forEach(element => {

    if (element.indexOf("a","i","u","e","o")) {
      vowelNum += 1;
    }

    // if (element === "a"|| 
    // element === "i"|| 
    // element === "u"||
    // element === "e"||
    // element === "o") {
    //   vowelNum += 1;
    // }
  
  });

  return vowelNum;

};

console.log(vowelCounter("orange")); /* 3 */
console.log(vowelCounter("Cornerstone")); /* 4 */
console.log(vowelCounter("aeiou")); /* 5 */