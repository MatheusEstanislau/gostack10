import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    align-items: center;

    button {
      padding: 12px 20px;
      background: #7159c1;
      border: none;
      overflow: hidden;
      margin-top: auto;
      border-radius: 4px;
      display: flex;
      align-items: center;
      transition: background 0.5s;
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #eee;
      border-radius: 4px;
      color: #999;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: none;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    text-transform: uppercase;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
