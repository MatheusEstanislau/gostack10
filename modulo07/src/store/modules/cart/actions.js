export const AddToCartRequest = (id) => ({ type: '@cart/Add_Request', id });

export const AddToCartSuccess = (product) => ({
  type: '@cart/Add_Success',
  product,
});

export const RemoveFromCart = (id) => ({ type: '@cart/Remove', id });

export const UpdateAmount = (id, amount) => ({
  type: '@cart/UpdateAmount',
  id,
  amount,
});
