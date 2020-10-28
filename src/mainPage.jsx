import { Grid, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { Component } from "react";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import { Button, Form, Input, Menu } from "semantic-ui-react";
import Room from "./room";
import RoomList from "./roomImg";

export default class MainPage extends Component {
  state = {
    activeItem: "home",
    visibleCheckin: false,
    visibleCheckout: false,
    visibleList: false,
    visibleRooms: true,
  };

  clickedCheckIn = () => {
    this.setState({
      visibleCheckin: true,
      visibleCheckout: false,
      visibleList: false,
      visibleRooms: false,
    });
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  clickedCheckOut = () => {
    this.setState({
      visibleCheckin: false,
      visibleCheckout: true,
      visibleList: false,
      visibleRooms: false,
    });
  };
  clickedRooms = () => {
    this.setState({
      visibleCheckin: false,
      visibleCheckout: false,
      visibleList: false,
      visibleRooms: true,
    });
  };
  render() {
    return (
      <div>
        <Menu secondary>
          <Menu.Item
            name="home"
            active={this.state.activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="jobs"
            active={this.state.activeItem === "jobs"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>

            {this.props.logged ? (
              <Button color="red" icon="arrow right">
                Logout
              </Button>
            ) : (
              <>
                <Button
                  color="green"
                  onClick={() => this.setState({ loginVisible: true })}
                >
                  Login
                </Button>

                <Button
                  color="blue"
                  onClick={() => this.setState({ signupVisible: true })}
                >
                  Signup
                </Button>
              </>
            )}
          </Menu.Menu>
        </Menu>
        <Grid container>
          <Grid item xs={3}>
            <ListItem
              button
              style={{ border: "1px solid black" }}
              onClick={this.clickedCheckIn}
            >
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary="Check In" />
            </ListItem>
            <ListItem
              button
              style={{ border: "1px solid black" }}
              onClick={this.clickedCheckOut}
            >
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
            <ListItem
              button
              style={{ border: "1px solid black" }}
              onClick={this.clickedRooms}
            >
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary="Rooms" />
            </ListItem>
          </Grid>
          <Grid item xs={9}>
            {this.state.visibleCheckin ? (
              <Room />
            ) : this.state.visibleRooms ? (
              <RoomList />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}
