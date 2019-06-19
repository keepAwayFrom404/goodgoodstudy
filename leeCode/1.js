var longestCommonPrefix = function(strs) {
  if (strs.length && strs.length !== 1) {
    let maxStr = strs.sort((a, b) => a.length - b.length)[strs.length - 1]
    let index = 0
    for (let i = 0; i < maxStr.length; i++) {
      for (let str of strs) {
        if (!str.startsWith(maxStr.substring(0, i + 1))) {
          index = i
          return index === 0 ? '' : maxStr.substring(0, index)
        }
      }
    }
  } else if (strs.length === 1 && /a-z/.test(strs[0])) {
    return strs[0]
  } else {
    return ""
  }
}
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))
