import { takeEvery, put, call } from "redux-saga/effects";
import { getProductItems } from "src/lib/api/ProductItems";

import {
  GET_PRODUCTITEM,
  getProductItemRequest,
  getProductItemSuccess,
  getProductItemFailure
} from "./action";

export function* getAllProductItem() {
  yield put(getProductItemRequest());
  try {
    const productItems = yield call(getProductItems);
    yield put(getProductItemSuccess(productItems));
  } catch (error) {
    yield put(getProductItemFailure(error));
  }
}

export default function* watchgetProductItems() {
  yield takeEvery(GET_PRODUCTITEM, getAllProductItem);
}
