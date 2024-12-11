<template>
  <div>
    <TodoForm @addTodo="addTodo" />
    <TodoList :todos="todos" @deleteTodo="deleteTodo" />
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import { fetchTodos } from "./api/todos";

export default {
  components: { TodoForm, TodoList },
  data() {
    return {
      todos: [], // Array of todos
    };
  },
  async mounted() {
    this.todos = await fetchTodos(); // Load initial todos
  },
  methods: {
    addTodo(todo) {
      this.todos = [...this.todos, todo]; // Ensure reactivity by creating a new array
      console.log("Updated todos array:", this.todos); // Debugging
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id); // Filter out by ID
    },
  },
};
</script>
