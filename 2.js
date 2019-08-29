/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!nums || !nums.length) {
    return []
  }
  let tempNum, tempNumIndex;
  for (let i = 0; i < nums.length; i++) {
    tempNum = target - nums[i]
    tempNumIndex = nums.indexOf(tempNum)
    if (tempNumIndex > -1 && tempNumIndex !== i) {
      return tempNumIndex > i ? [i, tempNumIndex] : [tempNumIndex, i]
    }
    if (i === nums.length - 1) return []
  }
};
console.log(twoSum([3, 2, 4], 9))