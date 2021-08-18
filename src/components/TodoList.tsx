import { UnorderedList, ListItem, Text, Button } from "@chakra-ui/react";

interface TodoListProps {
  todos: { id: string; todo: string }[];
  deleteTodoHandler: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <UnorderedList mt={4}>
      {props.todos.map((todo) => (
        <ListItem key={todo.id} mt={4}>
          <Text fontSize="2xl">{todo.todo}</Text>
          <Button
            colorScheme="cyan"
            size="sm"
            onClick={() => props.deleteTodoHandler(todo.id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default TodoList;
