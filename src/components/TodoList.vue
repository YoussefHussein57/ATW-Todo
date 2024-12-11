<template>
  <div class="todo-list">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="todo-item"
      :class="getTextColorClass(todo.color)"
      :style="{ backgroundColor: todo.color }"
    >
      <h4>{{ todo.todo }}</h4>
      <p>{{ formatDate(todo.date) }}</p>
      <p>{{ formatTime(todo.time) }}</p>
      <button @click="deleteTodo(todo.id)" class="delete-btn">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
// Import formatting utilities or define them inline
export default {
  props: ["todos"],
  methods: {
    deleteTodo(id) {
      this.$emit("deleteTodo", id); // Emit event to parent
    },
    getTextColorClass(color) {
      switch (color) {
        case "#607EAA":
          return "text-color-blue";
        case "#AC7088":
          return "text-color-red";
        case "#90C8AC":
          return "text-color-green";
        case "#EED180":
          return "text-color-yellow";
        default:
          return ""; // Default style
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
    },
    formatTime(time) {
      const [hour, minute] = time.split(":");
      const date = new Date();
      date.setHours(hour, minute);
      const options = { hour: "numeric", minute: "numeric", hour12: true };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
  },
};
</script>



  <style>
  .todo-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    border-radius: 8px;
    color: white;
    position: relative;
  }
  
  .delete-btn {
    
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: #ef4444;
    color: white;
    font-size: 0.875rem;
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .delete-btn:hover {
    background-color: #dc2626;
  }
  </style>
  