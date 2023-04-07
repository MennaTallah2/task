import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";

import ModalComponent from "./modal";
import ToDoForm from "./createTodoForm";
import { InfoRounded } from "@material-ui/icons";
import ViewData from "./viewData";
function TodoItem({ todo, onCheck, onUpdate, onDelete, onView }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  const handleCheck = () => {
    onCheck(todo.id);
  };

  const handleUpdate = (data) => {
    if (data) {
      onUpdate(todo.id, data);
      handleClose();
    }
  };

  const handleEdit = () => {
    setOpen(true);
  };
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleView = () => {
    setView(!view);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox checked={todo.done} onChange={handleCheck} />
      <div style={{ flexGrow: 1 }}>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
      </div>
      <IconButton onClick={handleView}>
        <InfoRounded />
      </IconButton>
      <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <ModalComponent open={open} close={handleClose}>
        <ToDoForm type="update" data={todo} onSubmit={handleUpdate} />
      </ModalComponent>

      <ViewData open={view} onClose={handleView} data={todo} />
    </div>
  );
}

export default TodoItem;
