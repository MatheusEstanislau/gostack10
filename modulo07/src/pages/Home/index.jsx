import React, { useEffect, useState } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProudctList } from './style';
import { formatPrice } from '../../utils/format';

import api from '../../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    setProducts(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProudctList>
      {products.map(product => {
        return (
          <li key={product.id}>
            <img src={product.image} alt="tenis" />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        );
      })}
    </ProudctList>
  );
};

export default Home;
