const countLetters = function(nameA) {
  let nameUniq = [];
  let result = {};
  for (let i of String(nameA)) {
    if (nameUniq.length == 0) {
      nameUniq.push(i);
      result[i] = 0;
    }
    let presence = false;
    for (let j = 0; j < nameUniq.length; j++) {
      if (nameUniq[j] === i) {
        presence = true;
        result[i]++;
      }
    }
    if (!presence) {
      nameUniq.push(i);
      result[i] = 1;
    }
  }
  console.log(result);
  return result;
};
countLetters("aXaaalabblliig");