function compileElement(el) {
  const childNodes = el.childNodes;
  Array.from(childNodes).forEach(node => {
    const reg = /\{\{(.*)\}\}/;
    const text = node.textContent;
    if (this.isTextNode(node) && reg.test(text)) {
      this.compileText(node, reg.exec(text)[1]);
    }
    if (node.childNodes && node.childNodes.length) {
      this.compileElement(node);
    }
  });
}
function compileText(node, exp) {
  const initText = this.vm[exp];
  this.updateText(node, initText);
  new Watcher(this.vm, exp, value => {
    this.updateText(node, value);
  });
}

function updateText(node, value) {
  node.textContent = typeof value == undefined ? '' : value;
}
