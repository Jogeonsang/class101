export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addCart = ({ id, price }) => {
  return {
    type: ADD_CART,
    id,
    price
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
