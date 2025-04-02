function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // Use a Set to store numbers we've seen

  for (const num of array) {
    const complement = target - num; // Calculate the complement of the current number
    if (seenNumbers.has(complement)) { // Check if we've seen the complement before
      return true; // If we have, return true because we found two numbers that sum up to the target
    }
    seenNumbers.add(num); // Otherwise, add the current number to the Set
  }

  return false; // If we go through the entire array without finding a pair, return false
}

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
