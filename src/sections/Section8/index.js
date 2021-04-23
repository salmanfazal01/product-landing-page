import { Container, Grid, makeStyles, withTheme } from "@material-ui/core";
import { AccountBalanceOutlined, RedeemOutlined } from "@material-ui/icons";
import React from "react";
import ResponsiveText from "../../components/ResponsiveText";
import SectionHeader from "../../components/SectionHeader";
import Image from "../../assets/images/1.png";

const data = [
  {
    title: "App Development",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: AccountBalanceOutlined,
    color: "red",
  },
  {
    title: "UX Planning",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: RedeemOutlined,
    color: "green",
  },
  {
    title: "Cloud Storage",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: RedeemOutlined,
    color: "yellow",
  },
  {
    title: "Customer Support",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: AccountBalanceOutlined,
    color: "blue",
  },
];

const useStyles = ({}) =>
  makeStyles((theme) => ({
    container: {
      [theme.breakpoints.up("lg")]: {
        background: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "contain",
      },
    },
    itemIconContainer: {
      height: "fit-content",
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      borderRadius: "50%",
    },
    title: {
      fontWeight: 600,
      whiteSpace: "pre-line",
      maxWidth: "400px",
    },
    description: {
      color: theme.palette.primary.darkgrey,
      maxWidth: "600px",
    },
    itemIcon: { fontSize: "50px" },
    itemTitle: { fontWeight: 600 },
    itemDescription: { color: theme.palette.primary.darkgrey },
    rightImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      // maxHeight: "600px",
    },
  }));

const Item = ({ Icon, title, description, color, classes, theme }) => (
  <Grid container spacing={1} direction={"column"} justify={"center"}>
    <Grid item>
      <div
        className={classes.itemIconContainer}
        style={{
          backgroundColor: theme.palette.background[`${color}Transparent`],
        }}>
        <Icon className={classes.itemIcon} />
      </div>
    </Grid>
    <Grid item>
      <ResponsiveText className={classes.itemTitle}>{title}</ResponsiveText>
    </Grid>
    <Grid item>
      <ResponsiveText variant={"body2"} className={classes.itemDescription}>
        {description}
      </ResponsiveText>
    </Grid>
  </Grid>
);

const Section8 = (props) => {
  const { theme } = props;
  const classes = useStyles(props)();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={6}>
            <Grid
              container
              spacing={5}
              alignItems={"center"}
              justify={"space-evenly"}>
              <Grid item xs={12}>
                <SectionHeader
                  title={"Ultimate features that\nwe built"}
                  description={
                    "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
                  }
                />
              </Grid>

              {data.map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Item
                    title={item.title}
                    description={item.description}
                    Icon={item.Icon}
                    color={item.color}
                    classes={classes}
                    theme={theme}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withTheme(Section8);
