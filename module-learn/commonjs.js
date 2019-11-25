/**
 * node中一个文件就是一个模块，一个模块就是Module的一个实例
 */
exports.age = 18;
exports.addAge = function addAge() {
  age++;
};
