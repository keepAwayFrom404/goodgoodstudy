import { h, Portal } from './h';
import render from './render';

class MyComponent {
  render() {
    return h(
      'div',
      {
        style: {
          background: 'green'
        }
      },
      [
        h('span', null, '我是组件的标题1......'),
        h('span', null, '我是组件的标题2......')
      ]
    );
  }
}

// VNode
const compVnode = h(MyComponent);

render(compVnode, document.getElementById('app'));
