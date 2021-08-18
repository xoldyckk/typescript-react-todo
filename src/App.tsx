import { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";
import { Box, Heading } from "@chakra-ui/layout";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (newTodo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: new Date().toISOString(), todo: newTodo },
    ]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todoId)
    );
  };

  return (
    <Box
      bg="white"
      p={4}
      color="black"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      marginX="auto"
    >
      <Heading as="h1" size="4xl">
        Todo
      </Heading>
      <NewTodo addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} deleteTodoHandler={deleteTodoHandler} />
    </Box>
  );
};

export default App;
