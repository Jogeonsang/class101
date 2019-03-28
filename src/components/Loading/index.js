import React from "react";
import styles from "./index.scss";

const Loading = props => (
  <div className={styles.container}>
    <img
      src="https://s3.ap-northeast-2.amazonaws.com/cloud.plating.co.kr/images/icon/loading.png"
      className={styles.spinner}
      alt="loading"
    />
  </div>
);

export default Loading;
