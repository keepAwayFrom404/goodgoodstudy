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
    }
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

function observe(data) {
  if (!data || typeof data !== 'object') return;
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  });
}

function SelfVue(options) {
  this.vm = this;
  this.data = options;
  Object.keys(this.data).forEach(key => {
    this.proxyKeys(key);
  });
  observe(this.data);
  new Compile(options, this.vm);
  return this;
}

SelfVue.prototype = {
  proxyKeys: function(key) {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function proxyGetter() {
        return this.data[key];
      },
      set: function proxySetter(newVal) {
        this.data[key] = newVal;
      }
    });
  }
};
