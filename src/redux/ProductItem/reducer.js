import {
  GET_PRODUCTITEM,
  GET_PRODUCTITEM_REQUEST,
  GET_PRODUCTITEM_SUCCESS,
  GET_PRODUCTITEM_FAILURE
} from "./action";

const ProductItem = (
  state = {
    isLoading: true,
    ProductItems: []
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTITEM:
      return {
        ...state
      };
    case GET_PRODUCTITEM_REQUEST:
      return {
        ...state
      };
    case GET_PRODUCTITEM_SUCCESS:
      return {
        isLoading: false,
        ...action.items
      };
    case GET_PRODUCTITEM_FAILURE:
      return {
        isLoading: false,
        error: "error"
      };
    default:
      return state;
  }
};

export default ProductItem;
