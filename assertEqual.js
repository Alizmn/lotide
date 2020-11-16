const assertEqual = function(actual, expected) {
  (actual === expected) ? (console.log("✅ Assertion Passed: [" + actual + "] === [" + expected + "]")) : (console.log("🛑 Assertion Failed: [" + actual + "] !== [" + expected + "]"));
};
assertEqual("Ali", 1);
assertEqual(1, 1);