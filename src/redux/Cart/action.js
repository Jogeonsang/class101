export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CLEAR_CART = "CLEAR_CART";
export const AMOUNT_CHANGE = "AMOUNT_CHANGE";

export const addCart = ({
  id,
  price,
  coverImg,
  title,
  availableCoupon,
  amount
}) => {
  return {
    type: ADD_CART,
    id,
    price,
    coverImg,
    title,
    availableCoupon,
    amount
  };
};

export const removeCart = ({ id }) => {
  return {
    type: REMOVE_CART,
    id
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};

export const amountChange = (id, amount) => {
  return {
    type: AMOUNT_CHANGE,
    id,
    amount
  };
};
