import { DatePicker, Space } from "antd";
import Axios from "axios";
import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class Room extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    telephone: "",
    clickedSubmit: false,
    start: "",
    stop: "",
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
    this.setState({ clickedSubmit: true });
    try {
      console.log(this.state);
      let info = await Axios.post("http://localhost:5000/checkin", this.state);
    } catch (err) {
      console.log(err);
    }
    this.setState({ clickedSubmit: false });
  };
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
          <Form.Group width="equal">
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
