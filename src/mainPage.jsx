import { Grid, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { Component } from "react";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
            <ListItem button style={{ border: "1px solid black" }}>
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary="Check In" />
            </ListItem>
            <ListItem button style={{ border: "1px solid black" }}>
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary="Check Out" />
            </ListItem>
            <ListItem button style={{ border: "1px solid black" }}>
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary="Check In List" />
            </ListItem>
            <ListItem button style={{ border: "1px solid black" }}>
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary="Rooms" />
            </ListItem>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </div>
    );
  }
}
