import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    button: {
      backgroundColor: theme.palette.primary.blue,
      color: theme.palette.secondary.text,
      textTransform: "inherit",
      borderRadius: "20px",
      padding: "9px 30px",
    },
  }));

const CustomButton = (props) => {
  const { children, className } = props;
  const classes = useStyles(props)();

  return (
    <Button variant={"contained"} className={`${classes.button} ${className}`}>
      {children}
    </Button>
  );
};

export default CustomButton;
