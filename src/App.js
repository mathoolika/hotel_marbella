import React, { Component } from "react";
import fire from "./config/Fire";
import Login from "./pages/Login";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Aboutus from "./pages/AboutUs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/rooms/" element={<Rooms />} />
          <Route exact path="/rooms/:single" element={<SingleRoom />} />
          <Route exact path="/aboutus/" element={<Aboutus />} />
          <Route exact path="/" element={this.state.user ? <Home /> : <Login />} />
        </Routes>
      </>
    );
  }
}
export default App;
