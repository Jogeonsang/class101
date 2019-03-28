import { all, fork } from "redux-saga/effects";

import watchgetProductItems from "./ProductItem/saga";
import cartRoot from "./Cart/saga";
export default function* setFeedRoot() {
  yield all([watchgetProductItems(), cartRoot()]);
}
