import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Menu,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: theme.palette.background.main,
      color: theme.palette.primary.text,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = (props) => {
  const classes = useStyles(props)();

  return (
    <AppBar position="static" elevation={1} className={classes.appbar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Logo
        </Typography>
        <Button>Home</Button>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
