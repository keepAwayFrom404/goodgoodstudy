function defineReactive(data, key, val) {
  observe(val);
  const dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: false,
    configurable: true,
    get: function() {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return val;
    },
    set: function(newValue) {
      if (val === newValue) return;
      val = newValue;
      console.log(`属性${key}已经被监听，现在的值为${newValue.toString()}`);
      dep.notify();
      console.log(dep);
    }
  });
}

function observe(data) {
  if (!data || typeof data !== 'object') return;
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  });
}
Dep.target = null;
function Dep() {
  this.subs = [];
}
Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub);
  },
  notify: function() {
    this.subs.forEach(sub => {
      sub.update();
    });
  }
};
