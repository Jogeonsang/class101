import { all, fork } from "redux-saga/effects";

import watchgetProductItems from "./ProductItem/saga";
export default function* setFeedRoot() {
  yield all([watchgetProductItems()]);
}
