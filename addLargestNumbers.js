const addLargestNumbers = function(data) {
  // Put your solution here

  let largestNum = 0;
  let secondLargestNum = 0;

  /* 一番大きければ上、ゼロより大きいけど最大より小さければセカンドに */
  for (i = 0; i < data.length; i++) {

    if (data[i] > largestNum) {
      secondLargestNum = largestNum;
      largestNum = data[i];
    } else if (data[i] < largestNum && data[i] > secondLargestNum) {
      secondLargestNum = data[i];
    }
  }
  
  /* 大きい２つを足して、リターン */
  return largestNum + secondLargestNum;


  
}

console.log(addLargestNumbers([1, 10])) /* 11 */
console.log(addLargestNumbers([1, 2, 3])); /* 5 */
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2])); /* 126 */