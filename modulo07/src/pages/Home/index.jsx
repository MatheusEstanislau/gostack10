/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { ProudctList } from './style';
import { formatPrice } from '../../utils/format';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

// eslint-disable-next-line react/prop-types
const Home = ({ dispatch, amount }) => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    setProducts(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleAddCart = (product) => {
    dispatch(CartActions.AddToCart(product));
  };

  return (
    <ProudctList>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.image} alt="tenis" />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>
            <button type="button" onClick={() => handleAddCart(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        );
      })}
    </ProudctList>
  );
};

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

export default connect(mapStateToProps)(Home);
