export const couponCalculation = (couponList, coupon, price) => {
  couponList.map(coupons => {
    if (coupon === "10% 할인 쿠폰") {
      let discount = price / coupons.discountRate;
      return price - discount;
    }
    if (coupon === "10,000원 할인 쿠폰") {
      return price - coupons.discountAmount;
    }
  });
};
