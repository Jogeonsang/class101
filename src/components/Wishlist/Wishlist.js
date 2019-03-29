import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames/bind";
import Items from "./component/Items";

import styles from "./styles.scss";
import { getCoupon } from "src/redux/Coupons/action";
import { amountChange } from "src/redux/Cart/action";
import { addComma } from "src/utils/price";
const moduleName = "WishList";
const cx = classnames.bind(styles);

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0
    };
  }
  componentDidMount() {
    this.props.getCoupon();
    console.log(this.props.getCoupon());
  }
  render() {
    const { Cart, Coupons, _amountChange } = this.props;
    console.log(Coupons);
    const CartArray = Object.values(Cart);
    return (
      <div>
        <div className={cx(`${moduleName}`)}>
          <span className={cx(`${moduleName}-title`)}>
            장바구니에 담으신 클래스를 모아봤어요.
          </span>
          <div className={cx(`${moduleName}-wishListBox`)}>
            {CartArray.map(Wishlist => (
              <>
                <Items
                  id={Wishlist.id}
                  title={Wishlist.title}
                  coverImg={Wishlist.coverImg}
                  price={Wishlist.price}
                  Coupons={Coupons}
                  amountChange={_amountChange}
                />
              </>
            ))}
            <div className={cx(`${moduleName}-paymentInfo`)}>
              <span className={cx(`${moduleName}-paymentInfo-label`)}>
                총 결제 금액
              </span>
              <span className={cx(`${moduleName}-paymentInfo-totalPrice`)}>
                {`${addComma(this.state.totalPrice)}원`}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ Cart, Coupons }) => ({ Cart, Coupons }),
  dispatch => ({
    _amountChange: (id, amount) => {
      dispatch(amountChange(id, amount));
    },
    getCoupon: () => {
      dispatch(getCoupon());
    }
  })
)(Wishlist);
