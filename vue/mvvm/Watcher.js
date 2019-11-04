function Watcher(vm, exp, cb) {
  this.cb = cb;
  this.exp = exp;
  this.vm = vm;
  this.value = this.get();
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
    let value = this.vm.data[this.exp];
    Dep.target = null;
    return value;
  }
};
