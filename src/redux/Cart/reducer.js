import { ADD_CART, REMOVE_CART, CLEAR_CART } from "./action";

const cart = (state = {}, action) => {
  switch (action.type) {
    // menuId 에 해당하는 카트 데이터에서 amount만큼 수량을 더한다.
    case ADD_CART: {
      const { id, price } = action;
      let itemData;
      if (!state[id]) {
        itemData = { id };
      } else {
        itemData = { ...state[id] };
      }

      itemData.price = price;

      return {
        ...state,
        [id]: itemData
      };
    }
    // menuId 에 해당하는 카트 데이터에서 amount만큼 수량을 뺀다.
    case REMOVE_CART: {
      const { id } = action;

      // 삭제할 것이 없을 경우
      if (!state[id]) {
        return state;
      }

      // 다음 state를 clone해서 준비
      const nextState = {
        ...state
      };

      const itemData = {
        ...state[id]
      };

      if (itemData) {
        delete nextState[id];
      } else {
        nextState[id] = itemData;
      }

      return nextState;
    }

    case CLEAR_CART: {
      return {};
    }

    default:
      return state;
  }
};

export default cart;
