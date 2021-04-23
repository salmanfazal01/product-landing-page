import {
  Container,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  useMediaQuery,
  useTheme,
  withTheme,
} from "@material-ui/core";
import React from "react";
import ResponsiveText from "../../components/ResponsiveText";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      fontWeight: 600,
    },
    description: {
      color: theme.palette.primary.darkgrey,
    },
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

const Section4 = (props) => {
  const classes = useStyles(props)();

  return (
    <Container maxWidth={"md"}>
      <Grid container spacing={4} justify={"center"}>
        <Grid item xs={12} md={5} className={classes.center}>
          <ResponsiveText variant={"h4"} className={classes.title}>
            Smart jackpots that you may love this anytime & anywhere
          </ResponsiveText>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} md={2} className={classes.center}>
            <Divider orientation={"vertical"} />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={5} className={classes.center}>
          <ResponsiveText variant={"body2"} className={classes.description}>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </ResponsiveText>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section4;
