import { Container, Grid, makeStyles, withTheme } from "@material-ui/core";
import {
  AccountBalanceOutlined,
  RedeemOutlined,
  SettingsEthernetOutlined,
} from "@material-ui/icons";
import React from "react";
import ResponsiveText from "../../components/ResponsiveText";

const data = [
  {
    title: "App Development",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: AccountBalanceOutlined,
    color: "red",
  },
  {
    title: "10 Times Award",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: SettingsEthernetOutlined,
    color: "blue",
  },
  {
    title: "Cloud Storage",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: RedeemOutlined,
    color: "yellow",
  },
  {
    title: "Customization",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: RedeemOutlined,
    color: "green",
  },
  {
    title: "UX Planning",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: AccountBalanceOutlined,
    color: "blue",
  },
  {
    title: "Customer Support",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: SettingsEthernetOutlined,
    color: "red",
  },
];

const useStyles = ({}) =>
  makeStyles((theme) => ({
    container: { textAlign: "center" },
    topContainer: { marginBottom: "40px" },
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
  }));

const Item = ({ Icon, title, description, color, classes, theme }) => (
  <Grid
    container
    spacing={2}
    direction={"column"}
    alignItems={"center"}
    justify={"center"}>
    <Grid item>
      <div
        className={classes.itemIconContainer}
        style={{ backgroundColor: theme.palette.background[`${color}Transparent`] }}>
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

const Section7 = (props) => {
  const { theme } = props;
  const classes = useStyles(props)();

  return (
    <Container className={classes.container}>
      <Grid
        container
        spacing={3}
        className={classes.topContainer}
        justify={"center"}
        alignItems={"center"}
        direction={"column"}>
        <Grid item xs>
          <ResponsiveText variant={"h4"} className={classes.title}>
            {"Why you should choose our app"}
          </ResponsiveText>
        </Grid>
        <Grid item xs>
          <ResponsiveText className={classes.description}>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </ResponsiveText>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={7}
        alignItems={"center"}
        justify={"space-evenly"}>
        {data.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
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
    </Container>
  );
};

export default withTheme(Section7);
