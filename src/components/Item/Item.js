import React, { Component } from "react";
import classnames from "classnames/bind";
import { connect } from "react-redux";

import { addCart, removeCart } from "src/redux/Cart/action";
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

  handleCartChange = itemId => {
    if (this.state.inCart === false) {
      this.setState({
        inCart: true
      });
      this.props.addOneToCart(itemId);
    } else {
      this.setState({
        inCart: false
      });
      this.props.removeOneFromCart();
    }
  };
  render() {
    const { coverImg, title, price, score, id } = this.props;
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
          onClick={() => this.handleCartChange(id)}
        >
          {this.state.inCart ? "장바구니에서 빼기" : "장바구니에 담기"}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ cart }, { id, price }) => ({
    id,
    cart,
    price
  }),
  (dispatch, { id, price }) => ({
    addOneToCart: () => {
      dispatch(addCart({ id, price }));
    },
    removeOneFromCart: () => dispatch(removeCart({ id }))
  })
)(Item);
