const countOnly = function(arrayA, objectB) {
  let result = {};
  for (let alphaKey in objectB) {
    if (objectB[alphaKey]) {
      let count = 0;
      for (let i = 0; i < arrayA.length; i++) {
        (arrayA[i] === alphaKey) && (count++);
      }
      (count !== 0) && (result[alphaKey] = count);
    }
  }
  console.log(result);
  return result;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });