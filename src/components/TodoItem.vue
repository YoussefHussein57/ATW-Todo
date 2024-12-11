<template>
    <div
      :style="{ backgroundColor: todo.color }"
      class="p-4 rounded-lg shadow-md text-white relative"
    >
      <h4 class="text-lg font-semibold">{{ todo.todo }}</h4>
      <p class="text-sm">{{ todo.date }} {{ todo.time }}</p>
      <button
        @click="deleteTodo"
        class="absolute top-2 right-2 text-sm bg-red-500 px-2 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["todo"],
    methods: {
      deleteTodo() {
        this.$emit("delete", this.todo.id);
      },
    },
  };
  </script>
  