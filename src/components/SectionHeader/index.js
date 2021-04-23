import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ResponsiveText from "../ResponsiveText";

const useStyles = ({ centered, largeTitle }) =>
  makeStyles((theme) => ({
    container: {
      textAlign: centered && "center",
    },
    title: {
      fontWeight: 600,
      whiteSpace: "pre-line",
      maxWidth: largeTitle ? "600px" : "500px",
    },
    description: {
      color: theme.palette.primary.darkgrey,
      maxWidth: largeTitle ? "700px" : "600px",
    },
  }));

const SectionHeader = (props) => {
  const { centered, title, largeTitle, description } = props;
  const classes = useStyles(props)();

  return (
    <Grid
      container
      spacing={3}
      justify={"center"}
      alignItems={centered && "center"}
      direction={"column"}
      className={classes.container}>
      {title && (
        <Grid item xs>
          <ResponsiveText
            variant={largeTitle ? "h3" : "h4"}
            className={classes.title}>
            {title}
          </ResponsiveText>
        </Grid>
      )}

      {description && (
        <Grid item xs>
          <ResponsiveText className={classes.description}>
            {description}
          </ResponsiveText>
        </Grid>
      )}
    </Grid>
  );
};

export default SectionHeader;
