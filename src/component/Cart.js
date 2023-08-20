import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, removeCart, subCount } from "../redux/store";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            
            <th>상품명</th>
            <th>수량</th>
            <th>금액</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((campingData, i) => (
            <tr key={i}>
              
              <td>{campingData.title}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(campingData.id));
                  }}
                >
                  +
                </button>{" "}
                {campingData.count}{" "}
                <button
                  onClick={() => {
                    dispatch(subCount(campingData.id));
                  }}
                >
                  -
                </button>
              </td>
              <td>{campingData.price * campingData.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(removeCart(campingData.id));
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" align="right">
              총 수량:
            </td>
            <td>{calculateTotalQuantity()}</td>
            <td colSpan="2" align="right">
              총 금액:
            </td>
            <td>{calculateTotalPrice()}</td>
          </tr>
          <tr>
            <td colSpan="6" align="center">
              <button onClick={() => alert("결제가 완료되었습니다.")}>
                결제하기
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Cart;