import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.main,
      color: theme.palette.primary.text,
    },
  }));

const Layout = ({ children }) => {
  const classes = useStyles({})();

  return (
    <div className={classes.root}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
