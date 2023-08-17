import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { memo, useMemo, useState } from "react";
import { addCount, removeCart, subCount } from "../redux/store";

const Test = memo(({ num }) => {

  return (

    <div>
      <h1>{num}</h1>
    </div>
  );
})


const fact = (n) => {
  if(n <= 1)
    return 1;

  return n * fact(n - 1);
}

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);
  const [n, setN] = useState(10);

  const result = useMemo(() => {
    return(
      fact(n)
    );
  }, [n])

  return (
    <>
        <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>금액</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {

            cart.map((campingData, i) => {
              return (
                <tr key={i}>
                  <td>{campingData.id}</td>
                  <td>{campingData.title}</td>
                  <td>
                    <button onClick={() => {
                      dispatch(addCount(campingData.id))
                    }}>+</button>{' '}
                    {campingData.count}
                    {' '}<button onClick={() => {
                      dispatch(subCount(campingData.id))
                    }}>-</button>
                  </td>
                  <td>
                    <button onClick={() => {
                      dispatch(removeCart(campingData.id))
                    }}>삭제</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  );
}

export default Cart;