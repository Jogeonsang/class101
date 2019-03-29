import { all } from "redux-saga/effects";

import watchgetProductItems from "./ProductItem/saga";
import cartRoot from "./Cart/saga";
import watchgetCoupons from "./Coupons/saga";
export default function* setFeedRoot() {
  yield all([watchgetProductItems(), cartRoot(), watchgetCoupons()]);
}
