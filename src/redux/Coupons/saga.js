import { takeEvery, put, call } from "redux-saga/effects";
import { getCoupons } from "src/lib/api/coupon";

import {
  GET_COUPON,
  getCouponRequest,
  getCouponSuccess,
  getCouponFailure
} from "./action";

export function* getCouponList() {
  yield put(getCouponRequest());
  try {
    const coupons = yield call(getCoupons);
    yield put(getCouponSuccess(coupons));
  } catch (error) {
    yield put(getCouponFailure(error));
  }
}

export default function* watchgetCoupons() {
  yield takeEvery(GET_COUPON, getCouponList);
}
