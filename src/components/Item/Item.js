import React, { Component } from "react";
import classnames from "classnames/bind";

import styles from "./styles.scss";

const moduleName = "Item";
const cx = classnames.bind(styles);

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: false
    };
  }
  addComma = num => {
    let regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  };

  handleCartChange = () => {
    if (this.state.inCart === false) {
      this.setState({
        inCart: true
      });
    } else {
      this.setState({
        inCart: false
      });
    }
  };
  render() {
    const { coverImg, title, price, score } = this.props;
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-Box`)}>
          <img className={cx(`${moduleName}-CoverImg`)} src={coverImg} alt="" />
          <div className={cx(`${moduleName}-title`)}>{title}</div>
          <div className={cx(`${moduleName}-price`)}>{`${this.addComma(
            price
          )}원`}</div>
        </div>
        <div
          className={cx(`${moduleName}-Button`)}
          onClick={this.handleCartChange}
        >
          {this.state.inCart ? "장바구니에서 빼기" : "장바구니에 담기"}
        </div>
      </div>
    );
  }
}

export default Item;
