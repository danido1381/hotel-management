import { DatePicker, Space } from "antd";
import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
toast.configure()

const options = [
  {
    text:"SINGLE BED MEDIUM",
    value: ["SINGLE BED MEDIUM",1000],
    key:1
  },
  {
    text:"COUPLE BED LARGE",
    value: ["COUPLE BED LARGE",1400],
    key:2
  },
  {
    text:"DOUBLE BED MEDIUM",
    value: ["DOUBLE BED MEDIUM",1500],
    key:3
  },
  {
    text:"DELUXE KING SIZE",
    value: ["DELUXE KING SIZE",1800],
    key:4
  },
  {
    text:"FAMILY",
    value: ["FAMILY",2000],
    key:5
  },
  {
    text:"FAMILY MEDIUM",
    value: ["FAMILY MEDIUM",1500],
    key:6
  },
  {
    text:"UPHOLSTERED BED NEAR CABINET LARGE",
    value: ["UPHOLSTERED BED NEAR CABINET LARGE",1500],
    key:7
  },
  {
    text:"TWO BEDS IN WELL-LIT ROOM SMALL",
    value: ["TWO BEDS IN WELL-LIT ROOM SMALL",1200],
    key:8
  },
  {
    text:"SINGLE BED ROOM IN WELL-LIT ROOM MEDIUM",
    value: ["SINGLE BED ROOM IN WELL-LIT ROOM MEDIUM",1100],
    key:9
  },
  {
    text:"LARGE SINGLE BED ROOM LARGE",
    value: ["LARGE SINGLE BED ROOM LARGE",1400],
    key:10
  },
  {
    text:"NORMAL ROOM WITH BED MEDIUM",
    value: ["NORMAL ROOM WITH BED MEDIUM",900],
    key:11
  },
  {
    text:"OPEN ROOM WITH KING SIZE BED LARGE",
    value: ["OPEN ROOM WITH KING SIZE BED LARGE",1750],
    key:12
  },
  {
    text:"COSY MODERN BEDROOM LARGE",
    value: ["COSY MODERN BEDROOM LARGE",2000],
    key:13
  },
  {
    text:"KING SIZE MODERN BEDROOM LARGE",
    value: ["KING SIZE MODERN BEDROOM LARGE",1500],
    key:14
  },
  {
    text:"REFINED BEDROOM LARGE",
    value: ["REFINED BEDROOM LARGE",2100],
    key:15
  },
  {
    text:"MODERN DELUXE BEDROOM LARGE",
    value: ["MODERN DELUXE BEDROOM LARGE",5000],
    key:16
  },
  {
    text:"SINGLE BED ROOM MEDIUM",
    value: ["SINGLE BED ROOM MEDIUM",1000],
    key:17
  },
]

class Room extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    telephone: "",
    clickedSubmit: false,
    roomType:"",
    start: "",
    stop: "",
    price:0
  };
  takeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  takeDate = (date, dateString) => {
    // console.log(date, dateString);
    this.setState({ start: dateString });
  };
  takeDateStop = (date, dateString) => {
    // console.log(date, dateString);
    this.setState({ stop: dateString });
  };

  submit = async () => {
    var date1 = new Date(this.state.start); 
var date2 = new Date(this.state.stop); 
  
// To calculate the time difference of two dates 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
console.log(Difference_In_Days)
  
// To calculate the no. of days between two dates 
    this.setState({ clickedSubmit: true });
    try {
      console.log( {...this.state,price:this.state.price*Difference_In_Days});
      let info = await Axios.post("http://localhost:5000/booking", {...this.state,price:this.state.price*Difference_In_Days});
      if(info.data.success){
        toast.success("Room booked")
        this.props.getBooks(info.data.booking);
        // window.location.reload()
      }
    } catch (err) {
      console.log(err);
    }
    this.setState({ clickedSubmit: false });
  };

  takeRoomType = (d,data)=>{
    console.log(data.value)
    this.setState({roomType:data.value[0],price:data.value[1]})
  }
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <Form>
          <Form.Input
            label="Firstname"
            placeholder="John"
            name="firstname"
            onChange={this.takeInput}
          />
          <Form.Input
            label="Lastname"
            placeholder="Doe"
            name="lastname"
            onChange={this.takeInput}
          />
          <Form.Input
            label="Phone"
            type="number"
            name="telephone"
            onChange={this.takeInput}
          />
          <Form.Input
            label="Address"
            name="address"
            placeholder="Address"
            onChange={this.takeInput}
          />
          <Form.Input
            label="Email"
            placeholder="abc@123.com"
            name="email"
            onChange={this.takeInput}
          />
          <Form.Select options={options} placeholder="Select Room type" label="Room Type" onChange={this.takeRoomType}/>
          <Form.Group wkeyth="equal">
            <Space direction="vertical">
              <DatePicker
                onChange={this.takeDate}
                placeholder="Start date"
                name="start"
              />
            </Space>
            <Space direction="vertical">
              <DatePicker
                onChange={this.takeDateStop}
                placeholder="End date"
                name="stop"
              />
            </Space>
          </Form.Group>
          <br />

          <Button onClick={this.submit} loading={this.state.clickedSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const bookingUser =(data)=>({type:"BOOKINGS",data})

const mapStateToProps = state =>{
  return {

  }
}

const mapDispatchtoProps = dispatch =>{
  return {
    getBooks:(data)=>dispatch(bookingUser(data))
  }
}
Room = connect(mapStateToProps,mapDispatchtoProps)(Room)

export default Room