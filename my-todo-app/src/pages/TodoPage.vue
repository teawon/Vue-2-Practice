<template>
  <div>
    <div class="total-count">총 목록 수: {{ todos.length }}</div>
    <ul class="todo-list">
      <!-- v-for 디렉티브를 사용해 todos 배열을 반복하여 각 Todo 항목을 li 요소로 렌더링 -->
      <!-- :key는 Vue의 요소 식별자 -->

      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        {{ todo.text }}
        <button class="delete-btn">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoPage", // 컴포넌트의 이름
  data() {
    // 컴포넌트의 데이터 객체를 반환
    return {
      todos: [
        { id: 1, text: "Vue.js" },
        { id: 2, text: "3" },
        { id: 3, text: "4" },
        { id: 4, text: "5" },
      ],
    };
  },
};
</script>

<style scoped>
.total-count {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
}

.todo-list {
  list-style: none;
  padding: 0;
}

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
