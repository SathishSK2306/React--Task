import React, { Component } from "react";
import Logo from "./Logo.jsx";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import Box1 from "./box1.jsx";
import Box2 from "./box2.jsx";
import Box3 from "./Box3.jsx";
export default class Nav extends Component {
  render() {
    return (
      <div>
        <Logo></Logo>
        <Home></Home>
        <Cart></Cart>
        <nav id="nav-bar">
          <div className="box-1">
            <Box1></Box1>
          </div>
          <div className="box-2">
            <Box2></Box2>
          </div>
          <div className="box-3">
            <Box3></Box3>
          </div>
        </nav>
      </div>
    );
  }
}
