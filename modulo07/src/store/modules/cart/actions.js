export const AddToCart = (product) => ({ type: '@cart/Add', product });

export const RemoveFromCart = (id) => ({ type: '@cart/Remove', id });

export const UpdateAmount = (id, amount) => ({
  type: '@cart/UpdateAmount',
  id,
  amount,
});
