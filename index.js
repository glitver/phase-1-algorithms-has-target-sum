function hasTargetSum(array, target) {
    // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
    }
}
}
return false;
}

/* 
  Write the Big O time complexity of your function here
  (n^2)/2 thus, O(n^2)
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
    // Iterate through each element in the array
    for i from 0 to array.length - 1:
        // Iterate through the rest of the array to find the complement
        for j from i + 1 to array.length - 1:
            // If the sum of current element and another element equals target, return true
            if array[i] + array[j] equals target:
                return true
    // If no such pair found, return false
    return false
*/

/*
  Add written explanation of your solution here
Look at Each Number: First, you start by looking at the first number in the list.
Check with Other Numbers: Then, you check if this number, when added to any other number in the list, equals the target number you're given.
Move to the Next Number: If it doesn't work out, you move to the next number in the list and repeat the process.
Repeat Until Done: You keep doing this for each number in the list until either you find a pair that adds up to the target, in which case you say "Yes, there's a pair!", or you check all possible pairs and find none that match, in which case you say "No, there's no such pair."
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
