import { Box } from "@material-ui/core";
import TodoItem from "../mainComponents/todoItem";

const TodoList = (props) => {
  return (
    <Box style={{ maxHeight: "90%", overflowY: "auto" }}>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheck={props.handleCheckTodo}
            onUpdate={props.handleUpdateTodo}
            onDelete={props.handleDeleteTodo}
          />
        ))}
      </ul>
    </Box>
  );
};
export default TodoList;
