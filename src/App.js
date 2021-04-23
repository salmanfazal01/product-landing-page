import { makeStyles, ThemeProvider } from "@material-ui/core";
import { getTheme } from "./config/theme";
import Layout from "./Layout";
import HomePage from "./pages/Home";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    container: {
      backgroundColor: theme.palette.background.main,
      color: theme.palette.primary.text,
    },
  }));

const App = (props) => {
  const classes = useStyles(props)();
  const _theme = getTheme("light");

  return (
    <ThemeProvider theme={_theme}>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
