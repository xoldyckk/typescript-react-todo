import { useRef } from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";

type NewTodoProps = {
  addTodoHandler: (newTodo: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo = todoInputRef.current!.value;
    props.addTodoHandler(newTodo);
    todoInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <FormControl>
        <Input
          mt={4}
          type="text"
          id="todo"
          placeholder="Enter todo here..."
          size="lg"
          fontSize="x-large"
          ref={todoInputRef}
        />
      </FormControl>
      <Button mt={4} type="submit" colorScheme="teal" size="sm">
        Add Todo
      </Button>
    </form>
  );
};

export default NewTodo;
