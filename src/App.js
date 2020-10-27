import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import SignIn from "./login";
import MainPage from "./mainPage";
import SignUp from "./signup";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/main/page" component={MainPage} />
      </BrowserRouter>
    </div>
  );
}
