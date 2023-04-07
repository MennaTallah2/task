import { makeStyles, Switch } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    top: "0px",
    right: "10px",
  },
}));
function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Switch
        color="primary"
        checked={props.isDarkMode}
        onChange={props.onThemeChange}
      />
      <span>{props.isDarkMode ? "Dark" : "Light"} Mode</span>
    </div>
  );
}
export default Header;
