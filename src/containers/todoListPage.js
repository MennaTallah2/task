import React, { useState } from "react";
import ToDoForm from "../mainComponents/createTodoForm";
import ModalComponent from "../mainComponents/modal";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import TodoList from "./todosLIst";
import WeatherCard from "../mainComponents/weatherCard";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    maxHeight: "100vh",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fab: {
    position: "fixed",
    backgroundColor: "primary",
    right: 20,
    bottom: 20,
  },
}));
function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState(undefined);
  const classes = useStyles();

  const handleAddTodo = () => {
    setAddTodo(true);
  };
  const handleNewTodo = (data) => {
    if (data) {
      setTodos([...todos, { id: todos.length + 1, ...data }]);
    }
  };

  const handleCheckTodo = (id) => {
    let today = new Date();
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
          endAt: today.toDateString(),
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (id, data) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...data };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" color="primary" component="h1">
        To-Do List App
      </Typography>
      <Link to="/weather">
        <WeatherCard />
      </Link>
      <div>
        <Fab
          color="primary"
          size="large"
          className={classes.fab}
          onClick={handleAddTodo}
        >
          <Add />
        </Fab>
      </div>
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCheckTodo={handleCheckTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
      {addTodo && (
        <ModalComponent open={addTodo} close={() => setAddTodo(undefined)}>
          <ToDoForm type="create" onSubmit={handleNewTodo} />
        </ModalComponent>
      )}
    </div>
  );
}

export default TodoListPage;
