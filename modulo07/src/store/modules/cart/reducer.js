/* eslint-disable no-console */
import produce from 'immer';

const cart = (state = [], action) => {
  switch (action.type) {
    case '@cart/Add':
      return produce(state, (draft) => {
        const ProductIndex = draft.findIndex((p) => p.id === action.product.id);
        if (ProductIndex >= 0) {
          draft[ProductIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    case '@cart/Remove':
      return produce(state, (draft) => {
        const ProductIndex = draft.findIndex((p) => p.id === action.id);
        if (ProductIndex >= 0) {
          draft.splice(ProductIndex, 1);
        }
      });
    case '@cart/UpdateAmount': {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, (draft) => {
        const ProductIndex = draft.findIndex((p) => p.id === action.id);
        draft[ProductIndex].amount = Number(action.amount);
      });
    }
    default:
      return state;
  }
};

export default cart;
