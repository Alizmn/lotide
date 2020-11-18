const findUnique = function(stringA) {
  let result = [];
  for (let i of String(stringA)) {
    let repeat = false;
    (result.length === 0) && (result.push(stringA[0]));
    for (let j = 0; j < result.length; j++) {
      (result[j] === i) && (repeat = true);
    }
    (!repeat) && (result.push(i));
  }
  console.log(result);
  return result;
};
const letterPositions = function(stringA) {
  let unique = findUnique(stringA);
  let result = {};
  for (let i = 0; i < unique.length; i++) {
    let uniqueTemp = [];
    for (let j = 0; j < stringA.length; j++) {
      (unique[i] === stringA[j]) && (uniqueTemp.push(j));
    }
    result[unique[i]] = uniqueTemp;
  }
  console.log(result);
  return result;
};
let userPrompt = process.argv;
letterPositions(userPrompt[2]);