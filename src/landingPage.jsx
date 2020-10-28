import { Grid, Button } from "@material-ui/core";
import { Modal } from "antd";
import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Button as Btn } from "semantic-ui-react";
import SliderJs from "./sliderJs";
toast.configure();

class LandingPage extends Component {
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
      let resp = await Axios.post("http://localhost:5000/login", {
        email: this.state.email,
        password: this.state.password,
      });
      console.log(resp);
      if (resp.data.exist) {
        if (resp.data.invalid) {
          toast.warning("Invalid email or password", { autoClose: 1000 });
        } else {
          this.props.login(resp.data);
          toast.success("User logged succesfully", { autoClose: 1500 });
          this.setState({ loginVisible: false });
        }
      } else {
        toast.error("Account doesn't exist", { autoClose: 1000 });
      }
    } catch (err) {
      console.log(err);
    }
  };
  signup = async () => {
    try {
      let resp = await Axios.post("http://localhost:5000/signup", this.state);
      if (resp.data.exist) {
        toast.error("User account doesn't exist", { autoClose: 1000 });
        this.setState({ signupVisible: false });
      } else {
        toast("User logged", { autoClose: 2000 });
        this.setState({ signupVisible: false });
      }
    } catch (err) {
      console.log(err);
    }
  };
  takeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    if (this.props.logged) {
      return <Redirect to="/main/page" />;
    }
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
            <Btn onClick={this.login}>Login</Btn>
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
            <Btn onClick={this.signup}>Signup</Btn>
          </Form>
        </Modal>
      </div>
    );
  }
}

const loginUser = (data) => ({ type: "LOGIN", data });

const mapStateToProps = (state) => {
  return {
    logged: state.info.logged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(loginUser(data)),
  };
};

LandingPage = connect(mapStateToProps, mapDispatchToProps)(LandingPage);
export default LandingPage;
