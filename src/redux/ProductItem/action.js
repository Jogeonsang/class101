export const GET_PRODUCTITEM = "GET_PRODUCTITEM";
export const GET_PRODUCTITEM_REQUEST = "GET_PRODUCTITEM_REQUEST";
export const GET_PRODUCTITEM_SUCCESS = "GET_PRODUCTITEM_SUCCESS";
export const GET_PRODUCTITEM_FAILURE = "GET_PRODUCTITEM_FAILURE";

export const getProductItem = () => {
  return {
    type: GET_PRODUCTITEM
  };
};

export const getProductItemRequest = () => {
  return {
    type: GET_PRODUCTITEM_REQUEST
  };
};

export const getProductItemSuccess = items => {
  return {
    type: GET_PRODUCTITEM_SUCCESS,
    items
  };
};

export const getProductItemFailure = error => {
  return {
    type: GET_PRODUCTITEM_FAILURE,
    error
  };
};
