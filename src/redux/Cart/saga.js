/**
 * cart saga는 dailies saga에 dependency가 있다. cart속에 담긴 menu의 정보는 dailies에서 가져오기 때문이다.
 * dailies에 없을 경우는 cart에서 제거해준다.
 */

import { all, fork, call, put, take, select } from "redux-saga/effects";

import {
  ADD_CART,
  REMOVE_CART,
  CLEAR_CART,
  addCart,
  clearCart
} from "./action";
import { selectCart } from "./selector";

// export function* cartInit() {
//     yield put(loadDailies());

//     const dailiesAction = yield take([
//       LOAD_DAILIES_SUCCESS,
//       LOAD_DAILIES_FAILURE,
//     ]);

//     try {
//       if (dailiesAction.type !== LOAD_DAILIES_SUCCESS)
//         throw new Error('fail to load dailies');

//       // 성공시에 cart를 localStorage의 것으로 initialize한다.
//       const { dailies } = yield select(selectDailies);
//       const cachedCart = JSON.parse(localStorage.getItem('cartCache'));

//       yield all(
//         dailies.data.map(({ menuInformation }) => {
//           const menuId = menuInformation.idx;
//           if (cachedCart[menuId]) {

//             return put(addCart({ menuId }));
//           }
//           return null;
//         })
//       );
//     } catch (error) {
//       // try중 실패하거나, LOAD_DAILIES 실패시에 cart를 비운다.
//       yield put(clearCart());
//     }
//   }

export function* cacheCart() {
  while (true) {
    yield take([ADD_CART, REMOVE_CART, CLEAR_CART]);
    const cart = yield select(selectCart);
    localStorage.setItem("cartCache", JSON.stringify(cart));
  }
}

export default function* cartRoot() {
  yield all([cacheCart()]);
}
