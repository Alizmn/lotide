const assertEqual = function(actual, expected) {
  (actual === expected) ? (console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)) : (console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`));
};
const eqArrays = function(A, B) {
  if (A.length !== B.length) {
    console.log(false);
    return false;
  } else {
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        console.log(false);
        return false;
      }
    }
  }
  console.log(true);
  return true;
};
(eqArrays([1, 2, 3], [1, 2, 3])); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);