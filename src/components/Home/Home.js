import React, { Component } from "react";
import classnames from "classnames/bind";

import Loading from "src/components/Loading";
import Item from "src/components/Item";

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
    const { ProductItem } = this.props;
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-title`)}>
          여러 가지 다양한 클래스를 경험해보세요!
        </div>
        <div className={cx(`${moduleName}-itemBox`)}>
          {!ProductItem.isLoading &&
            ProductItem.productItems.map(List => (
              <Item
                coverImg={List.coverImage}
                title={List.title}
                price={List.price}
                score={List.score}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ ProductItem }) => ({ ProductItem: ProductItem }),
  { getProductItem }
)(Home);
