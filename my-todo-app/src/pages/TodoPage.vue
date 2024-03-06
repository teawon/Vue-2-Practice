<template>
  <div class="page-wrapper">
    <button @click="toggleTheme">테마 전환</button>

    <div class="total-count">총 목록 수: {{ todos.length }}</div>

    <div class="add-todo">
      <input
        v-model="newTodoText"
        placeholder="새 Todo 항목 추가"
        @keyup.enter="addTodo"
      />
      <button @click="addTodo">추가</button>
    </div>

    <ul class="todo-list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete-todo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoItem from "./components/TodoItem.vue";
import { mapGetters, mapMutations } from "vuex";

interface Todo {
  id: number;
  text: string;
}

export default Vue.extend({
  name: "TodoPage", // 컴포넌트의 이름
  components: {
    TodoItem,
  },
  data() {
    // 컴포넌트의 데이터 객체를 반환
    return {
      todos: [
        { id: 1, text: "Vue.js" },
        { id: 2, text: "3" },
        { id: 3, text: "4" },
        { id: 4, text: "5" },
      ] as Todo[],
      newTodoText: "",
    };
  },
  computed: {
    ...mapGetters(["currentTheme"]), // 스토어의 currentTheme 게터 매핑
  },
  methods: {
    ...mapMutations(["toggleTheme"]),
    addTodo(): void {
      if (!this.checkValidText(this.newTodoText)) return;
      const newTodo = {
        id: Date.now(),
        text: this.newTodoText,
      };
      this.todos.push(newTodo);
      this.newTodoText = "";
    },
    checkValidText(text: string): boolean {
      return text.trim() !== "";
    },
    deleteTodo(id: number): void {
      this.todos = this.todos.filter((todo: any) => todo.id !== id);
    },
  },
});
</script>

<style scoped>
.page-wrapper {
  height: 100vh;
  background-color: var(--color-primary);
}
.total-count {
  margin-bottom: 20px;
  font-size: 18px;
  color: var(--color-text);
}

.add-todo {
  margin-bottom: 20px;
}

.add-todo input {
  margin-right: 10px;
  padding: 5px;
}

.add-todo button {
  padding: 5px 10px;
  cursor: pointer;
}

.todo-list {
  list-style: none;
  padding: 0;
}
</style>
