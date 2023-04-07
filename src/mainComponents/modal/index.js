import {
  Button,
  Box,
  Modal,
  Fab,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
// import styles from "./style.module.css";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "40vw",
    color: "#fff",
    padding: "1rem",
  },
});
const ModalComponent = (props) => {
  const classes = useStyles();
  const styles = {
    header: {
      display: "flex",
      flexDiretion: "row",
      justifyContent: "space-between",
    },
  };
  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.close}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Paper className={classes.paper}>
        <Fab
          style={styles.fab}
          size="small"
          color="primary"
          aria-label="add"
          onClick={props.close}
        >
          <Close fontSize="small" />
        </Fab>

        {props.children}
      </Paper>
    </Modal>
  );
};

export default ModalComponent;
