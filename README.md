# Vue Todo App

A modern and interactive Todo application built using **Vue 3**. This app allows users to create, view, and delete tasks with a clean, responsive, and professional design. The app integrates with a mock API to fetch and add tasks, providing a seamless user experience.

---

## Features

- 📝 Add Tasks: Create new todos with a date, time, task description, and custom color.
- 📋 View Todos: Display tasks in a responsive grid layout with beautiful card designs.
- 🗑️ Delete Tasks: Remove tasks instantly with a single click.
- ✨ Animations: Smooth fade-in effects for tasks and hover animations for interactivity.
- 🌐 API Integration: Connects to a mock API (`https://jsonplaceholder.typicode.com/todos`) to fetch and add tasks.

---

## Demo

![Todo App Screenshot](https://via.placeholder.com/800x400)  
_A modern, interactive, and responsive todo application._

---

## Installation

1. Clone the Repository

   git clone https://github.com/YoussefHussein57/ATW-Todo
   cd vue-todo-app

2. Install Dependencies

   npm install

3. Run the Application
   npm run serve

   The app will be available at `http://localhost:8080`.

4. Build for Production

   npm run build

---

Project Structure

```
src/
├── components/
│   ├── TodoForm.vue       # Handles task creation
│   ├── TodoList.vue       # Displays the list of tasks
│   └── TodoItem.vue       # Represents a single task
├── assets/
│   ├── styles.css         # Custom styles for the app
├── todos.js               # API service for fetching and adding tasks
├── App.vue                # Root component
├── main.js                # Entry point for the Vue app
```

---

## API Integration

The app integrates with the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) mock API:

- Fetch Todos: Retrieves a list of tasks.
- Add Todo: Posts a new task to the API.

### API Endpoints

1. GET `/todos`
   - Fetches a list of tasks (10 sample items for this project).
2. POST `/todos`
   - Adds a new task.
   - Request Body:
     ```json
     {
       "title": "Task description",
       "completed": false,
       "userId": 1
     }
     ```
   - Response Example:
     ```json
     {
       "id": 201,
       "title": "Task description",
       "completed": false,
       "userId": 1
     }
     ```

---

## Development Workflow

### Adding a Task

1. Fill in the date, time, task description, and select a color.
2. Click "Add Task".
3. The new task is added to the list and rendered with a fade-in animation.

### Deleting a Task

1. Hover over a task and click the "Delete" button.
2. The task is removed from the list instantly.

---

## Technologies Used

- Vue 3: Modern JavaScript framework for building user interfaces.
- CSS3: Custom styles for a clean and professional design.
- JSONPlaceholder: Mock API for testing CRUD operations.

---

## Screenshots

### Add Task Form

![Add Task Form Screenshot](https://via.placeholder.com/800x400)

### Task Grid

![Task Grid Screenshot](https://via.placeholder.com/800x400)

---

## Future Enhancements

- ✅ Add a task editing feature.
- 📅 Integrate a calendar view for better task management.
- 📊 Display analytics for completed tasks.

---

## Contributing

Contributions are welcome! If you'd like to improve the project:

1. Fork the repository.
2. Create a new branch.
3. Submit a pull request with your changes.

---
