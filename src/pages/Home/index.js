import { Container, Divider, Grid } from "@material-ui/core";
import React from "react";
import Section1 from "../../sections/Section1";
import Section10 from "../../sections/Section10";
import Section11 from "../../sections/Section11";
import Section12 from "../../sections/Section12";
import Section13 from "../../sections/Section13";
import Section2 from "../../sections/Section2";
import Section3 from "../../sections/Section3";
import Section4 from "../../sections/Section4";
import Section5 from "../../sections/Section5";
import Section6 from "../../sections/Section6";
import Section7 from "../../sections/Section7";
import Section8 from "../../sections/Section8";
import Section9 from "../../sections/Section9";

const index = () => {
  return (
    <div style={{ maxWidth: "100vw", overflowX: "clip" }}>
      <Grid container direction={"column"} spacing={8}>
        <Grid item>
          <Section1 />
        </Grid>

        <Grid item>
          <Section2 />
        </Grid>

        <Grid item />

        <Grid item>
          <Section3 />
        </Grid>

        <Grid item />

        <Grid item>
          <Section4 />
        </Grid>

        <Grid item />

        <Grid item>
          <Section5 />
        </Grid>

        <Grid item />

        <Grid item>
          <Section6 />
        </Grid>

        <Grid item />
      </Grid>

      <Divider />

      <Grid container direction={"column"} spacing={8}>
        <Grid item />
        <Grid item />

        <Grid item>
          <Section7 />
        </Grid>

        <Grid item />

        <Grid item>
          <Section8 />
        </Grid>

        <Grid item />

        <Grid item>
          <Section9 />
        </Grid>

        <Grid item />

        <Grid item>
          <Section10 />
        </Grid>

        <Grid item />

        <Grid item>
          <Section11 />
        </Grid>
      </Grid>

      <Divider />

      <Grid container direction={"column"}>
        <Grid item>
          <Section12 />
        </Grid>
        <Grid item>
          <Section13 />
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
