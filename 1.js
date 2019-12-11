const TO_CONVERT = {
  a_b: 123,
  c_d: {
    f_g_h: "asd",
    j_k: [
      123,
      "123",
      {
        l_q: "12313"
      },
      [1, 2, 3]
    ]
  },
  r_t: ["a", "b", "c"]
};

/**
 * @desc key 转为驼峰
 * @param [Array | Object] val 输入值
 * @retruns {Array | Object} 转换之后的数据源
 */
function camelCase(val) {
  if (Object.prototype.toString.call(val) === "[object Array]") {
    let tempArr = [];
    for (let arrVal of val) {
      if (typeof arrVal !== "object") {
        tempArr.push(arrVal);
      } else {
        tempArr.push(camelCase(arrVal));
      }
    }
    return tempArr;
  } else if (Object.prototype.toString.call(val) === "[object Object]") {
    let tempObj = {};
    for (let key in val) {
      let temp = keyToCamelCase(key);

      if (typeof val[key] !== "object") {
        tempObj[temp] = val[key];
      } else {
        tempObj[temp] = camelCase(val[key]);
      }
    }
    return tempObj;
  } else {
    return val;
  }
}
function keyToCamelCase(key) {
  return key.replace(/(^|_)(\w)/g, (m, $1, $2) => $2.toUpperCase());
}
console.log(camelCase(TO_CONVERT));
