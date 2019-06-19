<template>
  <div id="app">
    <div class="header">
      <h1>todos</h1>
      <input v-model="newTodo" autofocus="autofocus" autocomplete="off" placeholder="What needs to be done?" class="new-todo" @keyup.enter="newToDo">
    </div>
    <div class="main" v-if="allList.length">
      <input v-model="toggleAll" id="toggle-all" type="checkbox" class="toggle-all" @click="toggleAllClick">
      <label for="toggle-all"></label>
      <todo-list :todo-list="filterList"></todo-list>
    </div>

    <div class="footer" v-if="allList.length">
      <span class="todo-count">
        <strong>{{leftNum}}</strong> items left
      </span>
      <ul class="filters">
        <li>
          <a @click="switchTab('all')" :class="{selected: currentTab === 'all'}">All</a>
        </li>
        <li>
          <a @click="switchTab('active')" :class="{selected: currentTab === 'active'}">Active</a>
        </li>
        <li>
          <a @click="switchTab('completed')" :class="{selected: currentTab === 'completed'}">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" v-if="completedNum > 0" @click="clearCompleted">clear completed</button>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/todo-list.vue'
export default {
  name: 'App',
  data () {
    return {
      newTodo: '',
      allList: [],
      currentTab: 'all',
      toggleAll: false
    }
  },
  components: {
    TodoList
  },
  computed: {
    filterList () {
      if (this.currentTab === 'all') {
        return this.allList
      } else if (this.currentTab === 'active') {
        return this.allList.filter(item => !item.completed)
      } else {
        return this.allList.filter(item => item.completed)
      }
    },
    leftNum () {
      return this.allList.filter(item => !item.completed).length
    },
    completedNum () {
      return this.allList.filter(item => item.completed).length
    }
  },
  methods: {
    newToDo () {
      let newTodo = {}
      newTodo.value = this.newTodo
      newTodo.completed = false
      this.allList.unshift(newTodo)
      this.newTodo = ''
    },
    switchTab (name) {
      this.currentTab = name
    },
    toggleAllClick () {
      if (this.leftNum) {
        this.allList = this.allList.map(item => {
          item.completed = true
          return item
        })
        this.toggleAll = false
      } else {
        this.allList = this.allList.map(item => {
          item.completed = false
          return item
        })
        this.toggleAll = true
      }
    },
    clearCompleted () {
      this.allList = this.filterList.filter(item => !item.completed)
    }
  },
  watch: {
    leftNum (val) {
      this.toggleAll = !val
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
#app {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #4d4d4d;
  line-height: 1.4em;
  background: #f3f3f3;
  flex-direction: column;
  align-items: center;
}
.header {
  width: 550px;
  margin-top: 130px;
  background: #fff;
}
.header > h1 {
  position: absolute;
  left: 50%;
  top: 50px;
  font-size: 100px;
  font-weight: 100;
  color: rgba(175, 47, 47, 0.15);
  transform: translateX(-50%);
}
.new-todo,
.edit {
  width: 100%;
  padding: 16px 16px 16px 60px;
  font-size: 24px;
  color: #777;
  font-weight: 100;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
input::-webkit-input-placeholder {
  color: #f0f0f0;
  font-weight: 100;
}
input:-moz-placeholder {
  color: #f0f0f0;
  font-weight: 100;
}
input::-moz-placeholder {
  color: #f0f0f0;
  font-weight: 100;
}
input:-ms-input-placeholder {
  color: #f0f0f0;
  font-weight: 100;
}
:focus {
  outline: 0;
}
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
  width: 550px;
  background: #fff;
}
.toggle-all {
  position: absolute;
  border: none;
  opacity: 0;
  text-align: center;
}
.toggle-all + label {
  width: 60px;
  height: 34px;
  font-size: 0;
  position: absolute;
  top: -52px;
  left: -13px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.toggle-all + label:before {
  content: '❯';
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}
.toggle-all:checked + label:before {
  color: #737373;
}
.footer {
  position: relative;
  display: flex;
  align-items: center;
  width: 550px;
  height: 50px;
  padding: 0 15px;
  line-height: 300px;
  color: #777;
  text-align: center;
  background: #fff;
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.footer:before {
  position: absolute;
  bottom: -6px;
  left: 50%;
  z-index: -1;
  content: '';
  width: 540px;
  height: 5px;
  border-top: none;
  transform: translateX(-50%);
}
.footer:after {
  position: absolute;
  bottom: -12px;
  left: 50%;
  z-index: -2;
  content: '';
  width: 530px;
  height: 5px;
  border-top: none;
  transform: translateX(-50%);
}
.filters {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
}
.filters > li {
  display: inline;
}
.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}
.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}
.clear-completed {
  position: absolute;
  right: 15px;
  cursor: pointer;
}
button {
  font-size: 100%;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
}
</style>
