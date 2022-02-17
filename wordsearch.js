const transpose = function (matrix) {
  let outArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    outArray.push([]);
    for (let j = 0; j < matrix.length; j++) {
      outArray[i].push(matrix[j][i]);
    }
  }
  return outArray;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
    }
  const array = transpose(letters);
  const verticalJoin = array.map(x => x.join(''));
  for (let y of verticalJoin) {
    if (y.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
