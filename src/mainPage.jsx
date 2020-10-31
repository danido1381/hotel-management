import { Grid, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { Component } from "react";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import { Button, Form, Input, Menu } from "semantic-ui-react";
import Room from "./room";
import RoomList from "./roomImg";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Axios from "axios";
import CheckingList from "./checkingList";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RoomIcon from '@material-ui/icons/Room';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Checkout from "./checkout";


class MainPage extends Component {
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
  clickedCheckinglist = ()=>{
    this.setState({
      visibleCheckin: false,
      visibleCheckout: false,
      visibleList: true,
      visibleRooms: false,
    })
  }

  getBookings = async()=>{
    try{
      let data = await Axios.get("http://localhost:5000/booking")
      console.log(data)
      this.props.getBooks(data.data)
    }catch(err){
      console.log(err)
    }
  }
  componentDidMount(){
    this.getBookings()
  }
  render() {
    if(!this.props.logged){
      return <Redirect to="/"/>
    }
    return (
      <div>
        <Menu secondary>
          <Menu.Item
            name="home"
            active={this.state.activeItem === "home"}
            onClick={this.handleItemClick}
          />
          {/* <Menu.Item
            name="jobs"
            active={this.state.activeItem === "jobs"}
            onClick={this.handleItemClick}
          /> */}

          <Menu.Menu position="right">
            {/* <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item> */}

            
              <Button color="red" icon="arrow right" onClick={()=>this.props.logout()}>
                Logout
              </Button>
      
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
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Check Out" />
            </ListItem>
            <ListItem button style={{ border: "1px solid black" }} onClick={this.clickedCheckinglist}>
              <ListItemIcon>
                <PlaylistAddCheckIcon/>
              </ListItemIcon>
              <ListItemText primary="Check In List" />
            </ListItem>
            <ListItem
              button
              style={{ border: "1px solid black" }}
              onClick={this.clickedRooms}
            >
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText primary="Rooms" />
            </ListItem>
          </Grid>
          <Grid item xs={9}>
            {this.state.visibleCheckin ? (
              <Room />
            ) : this.state.visibleRooms ? (
              <RoomList />
            ) : this.state.visibleList?<CheckingList />:this.state.visibleCheckout?<Checkout/>:""}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const LogoutUser =()=>({type:"LOGOUT"})

const mapStateToProps = state =>{
  return{
    logged: state.info.logged
  }
}

const getAllBookings = data=>({type:"BOOKINGS",data})
const mapDispatchToProps = dispatch =>{
  return{
    logout: ()=>dispatch(LogoutUser()),
    getBooks: (data)=>dispatch(getAllBookings(data))
  }
}
MainPage = connect(mapStateToProps,mapDispatchToProps)(MainPage)
export default MainPage
