/* eslint-disable no-unused-vars */
const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
};

export default cart;
