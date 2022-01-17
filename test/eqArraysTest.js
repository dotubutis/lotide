const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  ),
  false
);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(
  eqArrays([[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]),
  true
);
assertEqual(
  eqArrays([[1, 2, [[], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]),
  false
);
assertEqual(
  eqArrays([[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[1]]]]]]]]]]]]]),
  true
);
assertEqual(
  eqArrays([[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[2]]]]]]]]]]]]]),
  false
);
