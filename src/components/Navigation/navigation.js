import React, { Component } from "react";
import classnames from "classnames/bind";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CartIcon from "react-ionicons/lib/IosCartOutline";
import style from "./styles.scss";
import logo from "src/static/logo.jpg";

const moduleName = "Navigation";
const cx = classnames.bind(style);

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cartAmount = Object.values(this.props.Cart).length;
    return (
      <div className={cx(`${moduleName}`)}>
        <span>
          <img className={cx(`${moduleName}-logo`)} src={logo} alt="logo" />
        </span>
        <span className={cx(`${moduleName}-rightIcon`)}>
          {cartAmount > 0 ? (
            <Link className={cx(`${moduleName}-cart`)} to="cart">
              <CartIcon className={cx(`${moduleName}-cartIcon`)} />
              <span className={cx(`${moduleName}-cart-amount`)}>
                {cartAmount || ""}
              </span>
            </Link>
          ) : null}
        </span>
      </div>
    );
  }
}

export default connect(
  ({ Cart }) => ({ Cart }),
  {}
)(Navigation);
