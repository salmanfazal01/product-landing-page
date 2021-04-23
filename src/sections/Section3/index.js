import { Container, Grid, makeStyles, withTheme } from "@material-ui/core";
import {
  EditOutlined,
  SpeedOutlined,
  WallpaperOutlined,
} from "@material-ui/icons";
import React from "react";
import ResponsiveText from "../../components/ResponsiveText";

const data = [
  {
    title: "Fast Performance",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: SpeedOutlined,
    color: "red",
  },
  {
    title: "Prototyping",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: WallpaperOutlined,
    color: "blue",
  },
  {
    title: "Vector Editing",
    description:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    Icon: EditOutlined,
    color: "green",
  },
];

const useStyles = ({}) =>
  makeStyles((theme) => ({
    container: {},
    image: {
      height: "100%",
      width: "100%",
      objectFit: "contain",
      maxHeight: "550px",
    },
    title: {
      fontWeight: 600,
      whiteSpace: "pre-line",
    },
    description: { color: theme.palette.primary.darkgrey },
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
  <Grid container spacing={3}>
    <Grid item xs={3}>
      <div
        className={classes.itemIconContainer}
        style={{ backgroundColor: theme.palette.background[`${color}Transparent`] }}>
        <Icon
          className={classes.itemIcon}
          style={{ color: theme.palette.primary[color] }}
        />
      </div>
    </Grid>
    <Grid item xs={9}>
      <ResponsiveText
        className={classes.itemTitle}
        style={{ color: theme.palette.primary[color] }}>
        {title}
      </ResponsiveText>
      <ResponsiveText variant={"body2"} className={classes.itemDescription}>
        {description}
      </ResponsiveText>
    </Grid>
  </Grid>
);

const Section3 = (props) => {
  const { theme } = props;
  const classes = useStyles(props)();

  return (
    <Container>
      <Grid container spacing={8} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <img
            src={
              "https://www.overdrive.com/apps/libby/assets/audiobook/img-audiobooks-en.png"
            }
            alt=""
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container direction={"column"} spacing={3}>
            <Grid item>
              <ResponsiveText variant={"h4"} className={classes.title}>
                {"Awesome apps\nfeatures"}
              </ResponsiveText>
            </Grid>
            <Grid item>
              <ResponsiveText className={classes.description}>
                Increase productivity with a simple to-do app. app for managing
                your personal budgets.
              </ResponsiveText>
            </Grid>
            <Grid item />
            {data.map((item, i) => (
              <Grid item key={i}>
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
      </Grid>
    </Container>
  );
};

export default withTheme(Section3);
