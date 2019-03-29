import React, { Component } from "react";
import classnames from "classnames/bind";
import { connect } from "react-redux";

import { addCart, removeCart } from "src/redux/Cart/action";
import { addComma } from "src/utils/price";
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
    const { coverImg, title, price, score, id, availableCoupon } = this.props;
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-Box`)}>
          <img className={cx(`${moduleName}-CoverImg`)} src={coverImg} alt="" />
          <div className={cx(`${moduleName}-title`)}>{title}</div>
          <div className={cx(`${moduleName}-price`)}>{`${addComma(
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
  ({ cart }, { id, price, coverImg, title, availableCoupon }) => ({
    id,
    cart,
    price,
    coverImg,
    title,
    availableCoupon
  }),
  (dispatch, { id, price, coverImg, title, availableCoupon }) => ({
    addOneToCart: () => {
      dispatch(
        addCart({ id, price, coverImg, title, availableCoupon, amount: 1 })
      );
    },
    removeOneFromCart: () => dispatch(removeCart({ id }))
  })
)(Item);
