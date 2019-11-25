(function(root, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    console.log("commonjs");
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    console.log("amd");
    define(factory);
  } else if (typeof define === "function" && define.cmd) {
    console.log("cmd");
    define(function(require, exports, module) {
      module.exports = factory();
    });
  } else {
    console.log("umd");
    root.umdModule = factory();
  }
})(this, function() {
  return {
    name: "lee"
  };
});
console.log(module.exports);
