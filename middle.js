const middle = function(A) {
  if (A.length < 3) {
    console.log([]);
    return [];
  }
  switch (A.length % 2) {
  case 1:
    console.log([A[((A.length - 1) / 2)]]);
    return [A[((A.length - 1) / 2)]];
  case 0:
    console.log([A[(A.length / 2) - 1], A[A.length / 2]]);
    return [A[(A.length / 2) - 1], A[A.length / 2]];
  }
};

middle([1]); // => []
middle([1, 2]);
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]