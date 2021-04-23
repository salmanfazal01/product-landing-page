import {
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  withTheme,
} from "@material-ui/core";
import { Facebook, GitHub, Telegram, Twitter } from "@material-ui/icons";
import React from "react";
import Image from "../../assets/images/3.png";
import ResponsiveText from "../../components/ResponsiveText";

const useStyles = ({}) =>
  makeStyles((theme) => ({
    root: {
      minHeight: "300px",
      backgroundColor: theme.palette.background.darkblue,
      color: theme.palette.secondary.text,
      padding: "50px 10px",
    },
    linkButton: {
      color: theme.palette.secondary.text,
      fontWeight: 300,
      textTransform: "inherit",
    },
    socialButton: {
      color: theme.palette.primary.darkgrey,
      "&:hover": {
        color: theme.palette.secondary.text,
      },
    },
    copyrightText: {
      color: theme.palette.primary.darkgrey,
    },
  }));

const Section8 = (props) => {
  const { theme } = props;
  const classes = useStyles(props)();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Container maxWidth={"sm"}>
          <Grid
            container
            direction={"column"}
            spacing={4}
            justify={"center"}
            alignItems={"center"}>
            <Grid item>
              <ResponsiveText variant={"h4"}>LOGO</ResponsiveText>
            </Grid>

            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button className={classes.linkButton}>Home</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.linkButton}>Key Features</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.linkButton}>Pricing</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.linkButton}>Testimonial</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.linkButton}>FAQ</Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <IconButton>
                    <Facebook className={classes.socialButton} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Twitter className={classes.socialButton} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <GitHub className={classes.socialButton} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Telegram className={classes.socialButton} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <ResponsiveText
                variant={"caption"}
                className={classes.copyrightText}>
                Copyright Salman Fazal 2021. All rights reserved.
              </ResponsiveText>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withTheme(Section8);
