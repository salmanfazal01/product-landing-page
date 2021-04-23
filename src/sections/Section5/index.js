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
    title: "Automatic Payouts",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: AccountBalanceOutlined,
    color: "red",
  },
  {
    title: "Network Effect",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: SettingsEthernetOutlined,
    color: "blue",
  },
  {
    title: "Bigger Rewards Method",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: RedeemOutlined,
    color: "green",
  },
];

const useStyles = ({}) =>
  makeStyles((theme) => ({
    container: {},
    itemIconContainer: {
      height: "fit-content",
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      borderRadius: "50%",
    },
    itemIcon: { fontSize: "50px" },
    itemTitle: { fontWeight: 600 },
    itemDescription: { color: theme.palette.primary.darkgrey },
  }));

const Item = ({ Icon, title, description, color, classes, theme }) => (
  <Grid container spacing={3} direction={"column"}>
    <Grid item>
      <div
        className={classes.itemIconContainer}
        style={{ backgroundColor: theme.palette.background[`${color}Transparent`] }}>
        <Icon
          className={classes.itemIcon}
          style={{ color: theme.palette.primary[color] }}
        />
      </div>
    </Grid>
    <Grid item>
      <ResponsiveText
        className={classes.itemTitle}
        style={{ color: theme.palette.primary[color] }}>
        {title}
      </ResponsiveText>
    </Grid>
    <Grid item>
      <ResponsiveText variant={"body2"} className={classes.itemDescription}>
        {description}
      </ResponsiveText>
    </Grid>
  </Grid>
);

const Section5 = (props) => {
  const { theme } = props;
  const classes = useStyles(props)();

  return (
    <Container maxWidth={"md"}>
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

export default withTheme(Section5);
