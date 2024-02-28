<template>
  <li class="todo-item">
    {{ todo.text }}
    <button class="delete-btn" @click="$emit('delete-todo', todo.id)">X</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
};
</script>

<style scoped>
.todo-item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
}
</style>
