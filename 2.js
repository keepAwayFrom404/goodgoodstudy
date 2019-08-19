/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums && nums.length) {
    let tempNum = null,
      tempNumIndex = null;
    for (let i = 0; i < nums.length; i++) {
      tempNum = target - nums[i];
      tempNumIndex = nums.indexOf(tempNum);
      if (tempNumIndex > -1 && tempNumIndex !== i) {
        return tempNumIndex > i ? [i, tempNumIndex] : [tempNumIndex, i]
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));