function Watcher(vm, exp, cb) {
  this.cb = cb; // callback
  this.exp = exp; // key
  this.vm = vm; // options
  this.value = this.get(); // value
}
Watcher.prototype = {
  update: function() {
    this.run();
  },
  run: function() {
    let value = this.vm.data[this.exp];
    let oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  },
  get: function() {
    Dep.target = this;
    let value = this.vm.data[this.exp]; // 访问触发push
    Dep.target = null;
    return value;
  }
};
