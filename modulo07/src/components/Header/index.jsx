import React from 'react';

import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './style';

import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="RocketShoes" />
      </Link>
      <Cart>
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 itens</span>
        </div>
        <Link to="/cart">
          <MdShoppingBasket size={36} color="#fff" />
        </Link>
      </Cart>
    </Container>
  );
}

export default Header;
