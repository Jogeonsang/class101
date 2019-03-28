import React, { Component } from "react";
import classnames from "classnames/bind";

import style from "./styles.scss";

import logo from "src/static/logo.jpg";

const moduleName = "Navigation";
const cx = classnames.bind(style);

class Navigation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <img className={cx(`${moduleName}-logo`)} src={logo} alt="logo" />
      </div>
    );
  }
}

export default Navigation;
