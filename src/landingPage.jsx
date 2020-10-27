import { Grid, Button } from "@material-ui/core";
import { Modal } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button as Btn } from "semantic-ui-react";
import SliderJs from "./sliderJs";

export default class LandingPage extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    telephone: "",
    loginVisible: false,
    signupVisible: false,
    clickedLogin: false,
  };

  login = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  signup = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  takeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={12} style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.setState({ loginVisible: true })}
            >
              Login
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.setState({ signupVisible: true })}
            >
              Signup
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {<SliderJs />}
          </Grid>
        </Grid>
        <Modal
          visible={this.state.loginVisible}
          onOk={() => this.setState({ loginVisible: false })}
          onCancel={() => this.setState({ loginVisible: false })}
        >
          <br />
          <h2>Admin Login</h2>
          <Form>
            <Form.Input
              label="Email"
              placeholder="abc@123.com"
              name="email"
              onChange={this.takeInput}
            />
            <Form.Input
              label="Password"
              placeholder="********"
              name="password"
              onChange={this.takeInput}
              type="password"
            />
            <Btn>Login</Btn>
          </Form>
        </Modal>
        <Modal
          visible={this.state.signupVisible}
          onOk={() => this.setState({ signupVisible: false })}
          onCancel={() => this.setState({ signupVisible: false })}
        >
          <br />
          <h2>Admin Signup</h2>
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
              label="Email"
              placeholder="abc@123.com"
              name="email"
              onChange={this.takeInput}
            />
            <Form.Input
              label="Password"
              placeholder="********"
              name="password"
              onChange={this.takeInput}
              type="password"
            />
            <Btn>Signup</Btn>
          </Form>
        </Modal>
      </div>
    );
  }
}
