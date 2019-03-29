import {
  GET_COUPON,
  GET_COUPON_REQUEST,
  GET_COUPON_SUCCESS,
  GET_COUPON_FAILURE
} from "./action";

const coupons = (
  state = {
    isLoading: true,
    coupons: []
  },
  action
) => {
  switch (action.type) {
    case GET_COUPON:
      return {
        ...state
      };
    case GET_COUPON_REQUEST:
      return {
        ...state
      };
    case GET_COUPON_SUCCESS:
      return {
        isLoading: false,
        ...action.coupons
      };
    case GET_COUPON_FAILURE:
      return {
        isLoading: false,
        error: "error"
      };
    default:
      return state;
  }
};

export default coupons;
