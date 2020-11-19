const findKeyByValue = function (objectA, valueB) {
  let result = [];
  for (let key in objectA) {
    (objectA[key] === valueB) && (result.push(key));
  }
  if (result.length == 0) {
    console.log("Not Available!");
    return "Not Available!";
  } else {
    console.log(result);
    return result;
  } 
};
let A = {
  Ali: 26,
  Sepideh: 26,
  Mom: 32,
  Dad: 35
};
let userP = process.argv;
findKeyByValue(A, Number(userP[2]));