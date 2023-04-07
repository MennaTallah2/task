import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  title: {
    color: "primary",
    fontSize: "18px",
  },
}));
const ViewData = (props) => {
  const classes = useStyles();
  const { data, open, onClose } = props;
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle color="primary">{data.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{data.description}</DialogContentText>
        <span className={classes.title}>Start Date</span>
        <p>{data.startAt}</p>
        <span className={classes.title}>End Date</span>

        <p> {data.endAt}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ViewData;
