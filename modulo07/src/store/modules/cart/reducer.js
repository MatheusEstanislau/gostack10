import produce from 'immer';

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const ProductIndex = draft.findIndex(p => p.id === action.product.id);
        if (ProductIndex >= 0) {
          draft[ProductIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    default:
      return state;
  }
};

export default cart;
