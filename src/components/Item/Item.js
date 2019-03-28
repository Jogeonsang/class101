import React from "react";
import classnames from "classnames/bind";

import styles from "./styles.scss";

const moduleName = "Item";
const cx = classnames.bind(styles);

const Item = ({
  price = "230000",
  title = "디지털로 만들어내는 아날로그 감성, 해란의 아이패드 드로잉",
  coverImg = "https://cdn.class101.net/images/cbadec97-d306-4669-bbcf-eef5d1a9d261"
}) => {
  return (
    <div>
      <img src={coverImg} alt="" />
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
};

export default Item;
