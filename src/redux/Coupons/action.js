export const GET_COUPON = "GET_COUPON";
export const GET_COUPON_REQUEST = "GET_COUPON_REQUEST";
export const GET_COUPON_SUCCESS = "GET_COUPON_SUCCESS";
export const GET_COUPON_FAILURE = "GET_COUPON_FALIURE";

export const getCoupon = () => {
  return {
    type: GET_COUPON
  };
};

export const getCouponRequest = () => {
  return {
    type: GET_COUPON_REQUEST
  };
};

export const getCouponSuccess = coupons => {
  console.log(coupons);
  return {
    type: GET_COUPON_SUCCESS,
    coupons
  };
};

export const getCouponFailure = error => {
  return {
    type: GET_COUPON_FAILURE,
    error
  };
};
