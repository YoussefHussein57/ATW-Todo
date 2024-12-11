<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="date">Date</label>
      <input id="date" type="date" v-model="newTodo.date" required />
    </div>

    <div>
      <label for="time">Time</label>
      <input id="time" type="time" v-model="newTodo.time" required />
    </div>

    <div>
      <label for="task">Task</label>
      <input id="task" type="text" v-model="newTodo.todo" required maxlength="40" placeholder="Enter your task" />
    </div>

    <div>
      <label>Color</label>
      <div class="radio-group">
        <div v-for="(color, index) in colorOptions" :key="index">
          <input type="radio" :id="'color' + index" :value="color" v-model="newTodo.color" />
          <label :for="'color' + index" :style="{ color }">Color {{ index + 1 }}</label>
        </div>
      </div>
    </div>

    <button type="submit">Add Task</button>
  </form>
</template>

<script>
import { addTodo } from "../api/todos";

export default {
  data() {
    return {
      newTodo: { date: "", time: "", todo: "", color: "#607EAA" },
      colorOptions: ["#607EAA", "#AC7088", "#EED180", "#F37878", "#90C8AC", "#D8CCA3", "#82A284"],
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const todo = await addTodo(this.newTodo);
        this.$emit("addTodo", todo);
        this.newTodo = { date: "", time: "", todo: "", color: "#607EAA" };
      } catch (error) {
        console.error("Failed to add todo:", error);
      }
    },
  },
};
</script>
