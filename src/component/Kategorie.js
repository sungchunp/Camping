import { Container } from 'react-bootstrap';
import './Kategorie.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Kategorie = ({ camping }) => {
  const [viewProduct, setviewProduct] = useState(9);
  let viewCamping = camping.slice(0, viewProduct);

  return (
    <>
      <div className="ListWrap grid3"
        style={{ backgroundImage: 'url(' + bg + ')' }}></div>
      <div className="container">
        <div className="row" >
          {
            viewCamping.map((data, i) => {
              return (
                <Card data={data} key={i} />
              );
            })
          }
        </div>
      </div >

    </>
  );
}

export default Kategorie;



{/* <ul>
    <li className="katecard1" onClick={() => {
      navigate('/detail/' + data.id);
    }} style={{ cursor: 'pointer' }}>
      <img src={`https://github.com/sungchunp/Camping/tree/main/${data.title}.jpg`} style={{ width: '24rem' }} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{data.title}</h5> //제품 명
        <p class="card-price">{data.price}</p>
      </div >
      <div class="card-body">
        <a href="#" class="card-link">장바구니</a>
        <a href="#" class="card-link">구매</a>
      </div>
    </li >
  </ul > * /} */}