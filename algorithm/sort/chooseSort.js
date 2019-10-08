const arr = [3, 2, 4, 5, 1];

function chooseSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let maxIndex = 0;
    let len = arr.length - i;
    for (let j = 1; j < len; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    [arr[maxIndex], arr[len - 1]] = [arr[len - 1], arr[maxIndex]];

  }
  return arr;
}
console.log(chooseSort(arr));