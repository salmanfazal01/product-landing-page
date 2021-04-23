import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import PriceCard from "../../components/PriceCard";
import ResponsiveText from "../../components/ResponsiveText";
import SectionHeader from "../../components/SectionHeader";

const data = [
  [
    {
      price: "$0",
      priceType: "month",
      title: "Business Class",
      subtitle: "For small teams or office",
      features: [
        "Drag & Drop Builder",
        "1000's of Templates",
        "Blog Support Tools",
        "eCommerce Store",
      ],
      buttonText: "Start free trial",
    },
    {
      price: "$99",
      priceType: "month",
      title: "Pro Master",
      subtitle: "For Best opportunities",
      features: [
        "Drag & Drop Builder",
        "1000's of Templates",
        "Blog Support Tools",
        "eCommerce Store",
      ],
      buttonText: "Subscribe Now",
      secondaryButtonText: "Or Start 14 days trial",
    },
  ],
  [
    {
      price: "$0",
      priceType: "year",
      title: "Business Class",
      subtitle: "For small teams or office",
      features: [
        "Drag & Drop Builder",
        "1000's of Templates",
        "Blog Support Tools",
        "eCommerce Store",
      ],
      buttonText: "Start free trial",
    },
    {
      price: "$499",
      priceType: "year",
      title: "Pro Master",
      subtitle: "For Best opportunities",
      features: [
        "Drag & Drop Builder",
        "1000's of Templates",
        "Blog Support Tools",
        "eCommerce Store",
      ],
      buttonText: "Subscribe Now",
      secondaryButtonText: "Or Start 14 days trial",
    },
  ],
];

const useStyles = ({}) =>
  makeStyles((theme) => ({
    header: {
      marginBottom: "40px",
    },
    switchSection: {
      marginBottom: "30px",
    },
    switchContainer: {
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      padding: "2px",
      border: "1px solid grey",
      borderRadius: "50px",
    },
    switchButton: {
      borderRadius: "inherit",
      padding: "8px 20px",
      "& :hover": {
        color: theme.palette.primary.blue,
      },
    },
    activeSwitch: {
      backgroundColor: theme.palette.background.blue,
      color: theme.palette.secondary.text,
      "& :hover": {
        color: theme.palette.primary.blue,
      },
    },
  }));

const Section9 = (props) => {
  const classes = useStyles(props)();

  const [switchBtn, setSwitchBtn] = useState(0);

  return (
    <Container>
      <div className={classes.header}>
        <SectionHeader
          centered
          title={"Get awesome features, without extra charges"}
          description={
            "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
          }
        />
      </div>

      <Grid container justify={"center"} className={classes.switchSection}>
        <Grid item>
          <div className={classes.switchContainer}>
            <Button
              onClick={() => setSwitchBtn(0)}
              className={`${classes.switchButton} ${
                switchBtn === 0 && classes.activeSwitch
              }`}>
              Monthly
            </Button>
            <Button
              onClick={() => setSwitchBtn(1)}
              className={`${classes.switchButton} ${
                switchBtn === 1 && classes.activeSwitch
              }`}>
              Annually
            </Button>
          </div>
        </Grid>
      </Grid>

      <Grid container justify={"center"} spacing={5}>
        {data?.[switchBtn]?.map((item, i) => (
          <Grid item key={i}>
            <PriceCard
              price={item.price}
              priceType={item.priceType}
              title={item.title}
              subtitle={item.subtitle}
              features={item.features}
              buttonText={item.buttonText}
              secondaryButtonText={item.secondaryButtonText}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section9;
