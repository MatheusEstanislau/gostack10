/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { connect } from 'react-redux';

import { Container, ProductTable, Total } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/format';

const Cart = ({ cart, total, dispatch }) => {
  const incrementAmount = (product) => {
    dispatch(CartActions.UpdateAmount(product.id, product.amount + 1));
  };
  const decrementAmount = (product) => {
    dispatch(CartActions.UpdateAmount(product.id, product.amount - 1));
  };
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => decrementAmount(product)}
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => incrementAmount(product)}
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.RemoveFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(mapStateToProps)(Cart);
