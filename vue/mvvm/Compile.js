function Compile(el, vm) {
  this.vm = vm;
  this.el = document.querySelector(el);
  this.fragment = null;
  this.init();
}

Compile.prototype = {
  init: function() {
    if (this.el) {
      this.fragment = this.nodeToFragment(this.el);
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    } else {
      console.log('done loss');
    }
  },
  nodeToFragment: function(el) {
    const fragment = document.createDocumentFragment();
    let child = el.firstChild;
    while (child) {
      fragment.appendChild(child);
      child = el.firstChild;
    }
    return fragment;
  },
  compileElement: function(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      const reg = /\{\{\s*(.*?)\s*\}\}/;
      const text = node.textContent;
      if (this.isTextNode(node) && reg.test(text)) {
        this.compileText(node, reg.exec(text)[1]);
      }
      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node);
      }
    });
  },
  compileText: function compileText(node, exp) {
    const initText = this.vm[exp];
    this.updateText(node, initText);
    new Watcher(this.vm, exp, value => {
      this.updateText(node, value);
    });
  },
  updateText: function(node, value) {
    node.textContent = typeof value == undefined ? '' : value;
  },
  isTextNode: function(node) {
    return node.nodeType == 3;
  }
};
