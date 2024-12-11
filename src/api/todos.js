// Base API URL
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Fetch todos from the API
export const fetchTodos = async () => {
  const response = await fetch(API_URL); // Fetch data from the API
  const data = await response.json(); // Parse JSON response
  // Format the data to include date, time, and color (for demo purposes)
  return data.slice(0, 10).map((item, index) => ({
    id: item.id,
    todo: item.title,
    date: "2023-12-10", // Placeholder date
    time: "12:00", // Placeholder time
    color: ["#607EAA", "#AC7088", "#EED180", "#F37878", "#90C8AC"][index % 5], // Cycle colors
  }));
};

// Add a new todo via the API
export const addTodo = async (todo) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: todo.todo, // Map `todo` to `title` for the API
      completed: false, // Default value for completed
      userId: 1, // Placeholder user ID
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add todo");
  }

  const newTodo = await response.json();

  // Map API response to match app's expected format
  return {
    id: newTodo.id,
    todo: newTodo.title, // Map `title` back to `todo`
    date: todo.date, // Use date from the form
    time: todo.time, // Use time from the form
    color: todo.color, // Use color from the form
  };
};
