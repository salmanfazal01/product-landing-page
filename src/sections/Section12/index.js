import {
  Button,
  Container,
  Grid,
  makeStyles,
  withTheme,
} from "@material-ui/core";
import React from "react";
import SectionHeader from "../../components/SectionHeader";
import Image from "../../assets/images/3.png";
import PlayStore from "../../assets/images/playstore.png";
import AppleStore from "../../assets/images/applestore.png";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    container: {
      [theme.breakpoints.up("lg")]: {
        background: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "contain",
      },
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
    },
    buttonImage: {
      maxWidth: "170px",
      objectFit: "contain",
      cursor: "pointer",
      "&:hover": {
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
    },
  }));

const Section8 = (props) => {
  const { theme } = props;
  const classes = useStyles(props)();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <SectionHeader
                  title={"Download our App now!"}
                  largeTitle
                  description={
                    "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item>
                    <img
                      src={PlayStore}
                      alt=""
                      className={classes.buttonImage}
                    />
                  </Grid>
                  <Grid item>
                    <img
                      src={AppleStore}
                      alt=""
                      className={classes.buttonImage}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withTheme(Section8);
