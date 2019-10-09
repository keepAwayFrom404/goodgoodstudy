function insertSort(arr) {
  let result = [];
  result[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let index = result.length;
    for (let j = result.length - 1; j >= 0; j--) {
      if (arr[i] < result[j]) {
        index = j;
      }
    }
    result.splice(index, 0, arr[i]);
    console.log(result);
  }
  return result;
}

const arr = [3, 2, 4, 5, 1];
console.log(insertSort(arr));
