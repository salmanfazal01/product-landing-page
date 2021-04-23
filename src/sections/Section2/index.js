import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ResponsiveText from "../../components/ResponsiveText";

const logos = [
  "https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png",
  "https://www.the-maze.co.il/wp-content/uploads/2016/03/Facebook-Logo-PNG-Clipart.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Twitter_logo.svg/1024px-Twitter_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png",
  "https://www.pngarts.com/files/9/Social-Blue-Discord-Logo-PNG-Pic-Background.png",
];

const useStyles = ({}) =>
  makeStyles((theme) => ({
    titleContainer: {
      display: "flex",
      justifyContent: "center",
    },
    logosContainer: {},
    logo: {
      objectFit: "contain",
      maxHeight: "30px",
    },
  }));

const Section2 = (props) => {
  const classes = useStyles(props)();

  return (
    <Container maxWidth={"md"}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.titleContainer}>
          <ResponsiveText>Trusted by companies like</ResponsiveText>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            justify={"space-evenly"}
            alignItems={"center"}
            className={classes.logosContainer}>
            {logos.map((logo, i) => (
              <Grid item key={i}>
                <img src={logo} key={i} alt="" className={classes.logo} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section2;
