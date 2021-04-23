import { Container, Grid, makeStyles, withTheme } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";
import Carousel from "react-material-ui-carousel";
import ResponsiveText from "../../components/ResponsiveText";
import SectionHeader from "../../components/SectionHeader";

const data = [
  {
    stars: 5,
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEWag69CiHzvw/profile-displayphoto-shrink_800_800/0/1615654383250?e=1624492800&v=beta&t=vhOgUWd3ucqMgYV6pA6Bql8YUYsi70flo2QjGTYhd30",
    name: "Salman Fazal",
    profession: "Full-stack Developer",
    title: "User friendly & Customizable",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    stars: 3,
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEWag69CiHzvw/profile-displayphoto-shrink_800_800/0/1615654383250?e=1624492800&v=beta&t=vhOgUWd3ucqMgYV6pA6Bql8YUYsi70flo2QjGTYhd30",
    name: "Salman Fazal",
    profession: "Full-stack Developer",
    title: "User friendly & Customizable",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
];

const useStyles = ({}) =>
  makeStyles((theme) => ({
    container: {
      [theme.breakpoints.up("lg")]: {
        background:
          'url("https://blog.sharingalpha.com/content/images/2018/05/IT-Outsourcing_1.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        backgroundSize: "contain",
      },
      minHeight: "650px",
    },
    header: {
      marginBottom: "30px",
    },
    itemStar: { color: theme.palette.primary.yellow, fontSize: "28px" },
    itemTitle: { fontSize: "18px", fontWeight: 600 },
    itemDescription: {
      marginBottom: "20px",
      color: theme.palette.primary.darkgrey,
    },
    itemImage: {
      maxHeight: "80px",
      objectFit: "contain",
      borderRadius: "50%",
    },
    itemName: { fontWeight: 600 },
    itemProfession: { color: theme.palette.primary.darkgrey },
  }));

const TestimonialItem = ({
  stars = 4,
  image,
  name,
  profession,
  title,
  description,
}) => {
  const classes = useStyles({})();

  return (
    <Grid container spacing={2} direction={"column"}>
      <Grid item className={classes.itemStarsContainer}>
        {[...Array(stars)].map((e, i) => (
          <Star className={classes.itemStar} key={i} />
        ))}
      </Grid>
      <Grid item>
        <ResponsiveText className={classes.itemTitle}>{title}</ResponsiveText>
      </Grid>
      <Grid item>
        <ResponsiveText className={classes.itemDescription}>
          {description}
        </ResponsiveText>
      </Grid>
      <Grid item>
        <Grid container spacing={3} alignItems={"center"}>
          <Grid item>
            <img src={image} alt="" className={classes.itemImage} />
          </Grid>
          <Grid item>
            <ResponsiveText className={classes.itemName}>{name}</ResponsiveText>
            <ResponsiveText className={classes.itemProfession}>
              {profession}
            </ResponsiveText>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Section10 = (props) => {
  const { theme } = props;
  const classes = useStyles(props)();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} lg></Grid>
          <Grid item xs={12} lg={7}>
            <div className={classes.header}>
              <SectionHeader
                title={"Meet Client Satisfaction by using product"}
                description={
                  "The rise of mobile devices transforms the way we consume. elevant channels such as Facebook."
                }
              />
            </div>

            <Carousel>
              {data.map((item, i) => (
                <TestimonialItem
                  stars={item.stars}
                  image={item.image}
                  name={item.name}
                  profession={item.profession}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withTheme(Section10);
