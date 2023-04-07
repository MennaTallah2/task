import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useState } from "react";
import MainPage from "./containers/MainPage";
import { Container } from "@material-ui/core";
import Header from "./mainComponents/header";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header onThemeChange={handleThemeChange} />
        <MainPage />
      </ThemeProvider>
    </Container>
  );
}

export default App;
