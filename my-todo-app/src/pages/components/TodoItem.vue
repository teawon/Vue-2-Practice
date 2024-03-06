<template>
  <li class="todo-item">
    {{ todo.text }}
    <button class="delete-btn" @click="$emit('delete-todo', todo.id)">X</button>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

interface TodoProps {
  id: number;
  text: string;
}

export default Vue.extend({
  name: "TodoItem",
  props: {
    todo: Object as () => TodoProps,
  },
});
</script>

<style scoped>
.todo-item {
  color: var(--color-text);
  border-bottom: 1px solid var(--color-background);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  background-color: red;
  color: var(--color-background);
  border: none;
  cursor: pointer;
  padding: 5px 10px;
}
</style>
