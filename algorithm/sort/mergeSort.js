// 合并数组
function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle),
    params = merge(mergeSort(left), mergeSort(right));
  params.unshift(0, arr.length);

  arr.splice.apply(arr, params);
  return arr;
}
