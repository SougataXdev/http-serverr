const express = require('express');
const app = express();
const PORT = 3001;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, title: 'Learn TypeScript', completed: false },
  { id: 2, title: 'Build Express server', completed: true },
  { id: 3, title: 'Create REST API', completed: false },
  { id: 4, title: 'Master async/await', completed: true },
  { id: 5, title: 'Deploy to production', completed: false },
  { id: 6, title: 'Write unit tests', completed: false },
  { id: 7, title: 'Document code', completed: true },
  { id: 8, title: 'Optimize performance', completed: false },
];

// Middleware
app.use(express.json());

// Routes
app.get('/todos', (req: any, res: any): void => {
  // Get random number of todos (1-5)
  const randomCount = Math.floor(Math.random() * 5) + 1;
  const randomTodos = todos.sort(() => 0.5 - Math.random()).slice(0, randomCount);
  res.json(randomTodos);
});

// Health check endpoint
app.get('/', (req: any, res: any): void => {
  res.json({ message: 'Express server is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Todos endpoint: http://localhost:${PORT}/todos`);
});
