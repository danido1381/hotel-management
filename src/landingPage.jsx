import { Grid, Button } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SliderJs from "./sliderJs";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={12} style={{ textAlign: "right" }}>
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="contained" color="secondary">
                Signup
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <SliderJs />
          </Grid>
        </Grid>
      </div>
    );
  }
}
