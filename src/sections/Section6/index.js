import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CustomButton from "../../components/CustomButton";
import ResponsiveText from "../../components/ResponsiveText";
import Image from "../../assets/images/2.png";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      maxHeight: "500px",
    },
    title: {
      fontWeight: 600,
      whiteSpace: "pre-line",
    },
    description: {
      color: theme.palette.primary.darkgrey,
    },
  }));

const Section6 = (props) => {
  const classes = useStyles(props)();

  return (
    <Container>
      <Grid container spacing={7} alignItems={"center"}>
        <Grid item xs={12} md={7}>
          <img src={Image} alt="" className={classes.image} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Container>
            <Grid container spacing={4} directions={"column"}>
              <Grid item>
                <ResponsiveText variant={"h4"} className={classes.title}>
                  {"Designed & developed\nby the latest code integration"}
                </ResponsiveText>
              </Grid>
              <Grid item>
                <ResponsiveText className={classes.description}>
                  The rise of mobile devices transforms the way we consume
                  information entirely and the world's most elevant channels
                  such as Facebook.
                </ResponsiveText>
              </Grid>
              <Grid item>
                <ResponsiveText variant={"h4"} className={classes.title}>
                  <CustomButton>Learn more</CustomButton>
                </ResponsiveText>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section6;
