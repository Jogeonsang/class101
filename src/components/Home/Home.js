import React, { Component } from "react";
import classnames from "classnames/bind";

import Loading from "src/components/Loading";

import style from "./styles.scss";
import { connect } from "react-redux";
import { getProductItem } from "src/redux/ProductItem/action";

const moduleName = "Home";
const cx = classnames.bind(style);

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getProductItem();
  }
  render() {
    console.log(this.props.ProductItem);
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-title`)}>
          여러 가지 다양한 클래스를 경험해보세요!
        </div>
        {this.props.ProductItem.isLoading ? <Loading /> : null}
      </div>
    );
  }
}

export default connect(
  ({ ProductItem }) => ({ ProductItem: ProductItem }),
  { getProductItem }
)(Home);
