import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import ResponsiveText from "../ResponsiveText";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    root: {
      maxWidth: 300,
      textAlign: "center",
      padding: 0,
    },
    content: {
      padding: 0,
    },
    topContainer: {
      backgroundColor: theme.palette.background.lightgrey,
      padding: "40px 10px",
    },
    middleContainer: {
      padding: "30px 10px 0",
    },
    bottomContainer: {
      padding: "30px 10px 0",
    },
    price: {
      fontWeight: 600,
    },
    priceType: { color: theme.palette.primary.darkgrey },
    title: {
      fontSize: "18px",
      fontWeight: 600,
    },
    subtitle: { color: theme.palette.primary.darkgrey },
    featureItem: { color: theme.palette.primary.darkgrey },
    mainButton: {
      backgroundColor: theme.palette.background.blue,
      color: theme.palette.secondary.text,
      padding: "10px 40px",
      borderRadius: "50px",
    },
    secondaryButton: {
      color: theme.palette.primary.blue,
    },
  }));

const PriceCard = (props) => {
  const {
    price,
    priceType,
    title,
    subtitle,
    features = [],
    buttonText,
    secondaryButtonText,
  } = props;
  const classes = useStyles(props)();

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent className={classes.content}>
        <Grid container spacing={2} className={classes.topContainer}>
          <Grid item xs={12}>
            <Grid container justify={"center"} alignItems={"flex-end"}>
              <Grid item>
                <ResponsiveText variant="h2" className={classes.price}>
                  {price}
                </ResponsiveText>
              </Grid>
              <Grid item>
                <ResponsiveText variant="h6" className={classes.priceType}>
                  /{priceType}
                </ResponsiveText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ResponsiveText gutterBottom className={classes.title}>
              {title}
            </ResponsiveText>
            <ResponsiveText className={classes.subtitle} variant={"body2"}>
              {subtitle}
            </ResponsiveText>
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.middleContainer}>
          {features.map((item, i) => (
            <Grid item xs={12} key={i}>
              <ResponsiveText className={classes.featureItem} variant={"body2"}>
                {item}
              </ResponsiveText>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} className={classes.bottomContainer}>
          <Grid item xs={12}>
            <Button className={classes.mainButton}>{buttonText}</Button>
          </Grid>
          {secondaryButtonText && (
            <Grid item xs={12}>
              <Button className={classes.secondaryButton} size={"small"}>
                {secondaryButtonText}
              </Button>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
