import React, { Component } from "react";
import styles from "./Items.scss";
import classnames from "classnames/bind";

import { addComma } from "src/utils/price";
import { couponCalculation } from "src/utils/coupon";
const moduleName = "Item";
const cx = classnames.bind(styles);

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1
    };
  }
  handleAmountChange = (e, id) => {
    this.setState({
      amount: e.target.value
    });
    this.props.amountChange(id, e.target.value);
  };

  handleCouponSelect = (e, price) => {
    const couponList = this.props.Coupons.coupons;
    !this.props.Coupons.isLoading &&
      console.log(couponCalculation(couponList, e.target.value, price));
  };
  render() {
    const { coverImg, title, price, Coupons, id } = this.props;
    return (
      <div key={id} className={cx(`${moduleName}-Item`)}>
        <div className={cx(`${moduleName}-Item-checkBox`)}>
          <input type="checkbox" />
        </div>
        <div className={cx(`${moduleName}-Item-img`)}>
          <img src={coverImg} alt="coverImg" />
        </div>
        <div className={cx(`${moduleName}-Item-info`)}>
          <span className={cx(`${moduleName}-Item-info-title`)}>{title} </span>
          <span className={cx(`${moduleName}-Item-info-price`)}>
            {addComma(price)}
          </span>
          <input
            type="number"
            value={this.state.amount}
            defaultValue={this.state.amount}
            onChange={e => this.handleAmountChange(e, id)}
            className={cx(`${moduleName}-Item-info-amount`)}
          />
          <select
            className={cx(`${moduleName}-Item-info-coupon`)}
            onChange={e => this.handleCouponSelect(e, price)}
          >
            <option selected disabled>
              쿠폰을 선택해주세요
            </option>
            {!Coupons.isLoading &&
              Coupons.coupons.map(coupon => (
                <option value={coupon.title}>{coupon.title}</option>
              ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Items;
