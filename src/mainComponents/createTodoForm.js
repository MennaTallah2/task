import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(3),
    direction: "row",
  },
  submitButton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ToDoForm = ({ type, data, onSubmit }) => {
  const classes = useStyles();

  const [title, setTitle] = useState(data?.title || "");
  const [description, setDescription] = useState(data?.description || "");
  const [startAt, setStartAt] = useState(data?.startAt || "");
  const [endAt, setEndAt] = useState(data?.endAt || "");
  const [archive, setArchive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, startAt, endAt, archive });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        color="primary"
        component="h2"
        align="center"
      >
        {type === "update" ? "Update To-do" : "Create To-do"}
      </Typography>
      <TextField
        required
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        fullWidth
        label="Start At"
        type="date"
        value={startAt}
        onChange={(e) => setStartAt(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        fullWidth
        label="End At"
        type="date"
        value={endAt}
        onChange={(e) => setEndAt(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Archive</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={archive}
                onChange={(e) => setArchive(e.target.checked)}
                name="archive"
              />
            }
            label="Archive"
          />
        </FormGroup>
      </FormControl>
      <Button
        className={classes.submitButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        {type === "update" ? "update" : "Add"}
      </Button>
    </form>
  );
};

export default ToDoForm;
