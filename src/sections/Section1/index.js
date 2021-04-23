import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import { CheckCircleOutlined } from "@material-ui/icons";
import React from "react";
import Background from "../../assets/images/bg.png";
import CustomButton from "../../components/CustomButton";
import ResponsiveText from "../../components/ResponsiveText";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    root: {
      background: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
    container: {
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "30px",
    },
    badgeContainer: {
      display: "flex",
      alignItems: "center",
      borderRadius: "20px",
      backgroundColor: theme.palette.primary.grey,
      width: "fit-content",
    },
    badgeIconSpan: {
      backgroundColor: theme.palette.primary.orange,
      borderRadius: "inherit",
      padding: "5px 7px",
      display: "flex",
      alignItems: "center",
    },
    badgeIcon: {
      color: theme.palette.secondary.text,
    },
    badgeText: {
      padding: "0px 20px 0px 10px",
      fontSize: "14px",
      fontWeight: 500,
      color: theme.palette.primary.black,
    },
    fullHeight: {
      height: "100%",
    },
    leftSide: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontWeight: 600,
    },
    description: {
      letterSpacing: "0.3px",
    },
    button1: {
      marginRight: "10px",
    },
    button2: {
      textTransform: "inherit",
      letterSpacing: "0px",
    },
    rightSide: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      height: "100%",
      width: "100%",
      objectFit: "contain",
      maxHeight: "70vh",
    },
  }));

const Badge = ({ classes, Icon, text }) => {
  return (
    <div className={classes.badgeContainer}>
      <span className={classes.badgeIconSpan}>
        <Icon fontSize={"small"} className={classes.badgeIcon} />
      </span>
      <ResponsiveText className={classes.badgeText}>{text}</ResponsiveText>
    </div>
  );
};

const Section1 = (props) => {
  const classes = useStyles(props)();

  return (
    <div className={classes.root}>
      <Container className={`${classes.container} ${classes.fullHeight}`}>
        <Grid
          container
          alignItems={"center"}
          spacing={6}
          className={`${classes.fullHeight}`}>
          <Grid
            item
            xs={12}
            md={6}
            className={`${classes.fullHeight} ${classes.leftSide}`}>
            <Grid container spacing={3} direction={"column"}>
              <Grid item>
                <Badge
                  classes={classes}
                  Icon={CheckCircleOutlined}
                  text={"#1 Editors Choice App of 2021 "}
                />
              </Grid>
              <Grid item>
                <ResponsiveText variant={"h3"} className={classes.title}>
                  {"Best app for your\nmodern lifestyle"}
                </ResponsiveText>
              </Grid>
              <Grid item>
                <ResponsiveText className={classes.description}>
                  Increase productivity with a simple to-do app. app for
                  managing your personal budgets.
                </ResponsiveText>
              </Grid>
              <Grid item>
                <CustomButton className={classes.button1}>
                  Try for free
                </CustomButton>
                <Button className={classes.button2}>Watch demo video</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={`${classes.fullHeight} ${classes.rightSide}`}>
            <img
              src={"https://technext.github.io/CA/img/bg-img/welcome-img.png"}
              alt={""}
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Section1;
