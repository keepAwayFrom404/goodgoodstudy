<template>
  <div>
    <ul class="todo-list">
      <li class="todo" :class="{completed: todo.completed}" v-for="(todo, index) in todoList" :key="index">
        <div class="view">
          <input type="checkbox" class="toggle" v-model="todo.completed">
          <label>{{todo.value}}</label>
          <button class="destory" @click="destory(index)"></button>
        </div>
        <input type="text" class="edit" style="display:none">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  props: ['todoList'],
  data () {
    return {}
  },
  methods: {
    destory (index) {
      this.todoList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.todo-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.todo-list > li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}
.todo-list li:last-child {
  border-bottom: none;
}

.todo-list li.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}
.toggle {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 40px;
  height: 40px;
  background: none;
  opacity: 0;
}
.toggle + label {
  display: block;
  padding: 15px 15px 15px 60px;
  line-height: 1.2;
  word-break: break-all;
  background-repeat: no-repeat;
  background-position: center left;
}
.toggle:checked + label {
  background-image: url('https://grade-pro-1257007873.cos.ap-chengdu.myqcloud.com/yes.png');
  background-size: 36px 36px;
}
.toggle + label {
  background-image: url('https://grade-pro-1257007873.cos.ap-chengdu.myqcloud.com/no2.png');
  background-size: 34px 34px;
}
.destory {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  font-weight: 100;
  color: #cc9a9a;
  margin-bottom: 11px;
}
.destory:hover {
  color: #af5b5e;
}
.destory:after {
  content: 'x';
}
button {
  margin: 0;
  padding: 0;
  border: 0;
}
:focus {
  outline: 0;
}
</style>
