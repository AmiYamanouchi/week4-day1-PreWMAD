// write a function that returns the sum of all the numbers that are either 'even', or 'odd'


const conditionalAdding = function(values, condition) {
  // Your code here

  let evenSum = 0;  /*初期値*/
  let oddSum = 0;  /*初期値*/

  values.forEach(element => {
    
    if (element % 2 === 0) {
        evenSum += element;
      } else {
        oddSum += element;
      }

  });



  if (condition === "even"){
    return evenSum;
  } else {
    return oddSum;
  };


}



console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));  /* 6 */
console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));  /* 9 */
console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));  /* 144 */
console.log(conditionalAdding([], "odd"));
