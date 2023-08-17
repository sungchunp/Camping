import { Nav, TabContent } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addCart } from "../redux/store";
import { useDispatch } from "react-redux";
import data from "../campingData";
import { setWatched } from '../redux/watchedSlice';
import './Detail.css';




const Detail = ({ camping }) => {
  const { id } = useParams();
  const [tabNumber, setTabNumber] = useState(0);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    let watched = localStorage.getItem('watched');
    watched = JSON.parse(watched) || [];

    if (!watched.includes(id)) {
      watched.push(id);
    }

    watched = [...new Set(watched)];

    localStorage.setItem('watched', JSON.stringify(watched));
    dispatch(setWatched(watched));
  }, [id, dispatch]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [setAlert]);

  let result = camping.find(item => item.id === parseInt(id));

  if (!result) {
    return (
      <div>등록된 상품이 없습니다.</div>
    )
  }

  return (
    <>
      <div className="now">
        <div className="pd-img">
          <img src={`https://raw.githubusercontent.com/sungchunp/image/main/${camping[id].title}.jpg`} width="25%" />
        </div>
        <div className="pd-1" >
          <h5 className="pt-1">{camping[id].title}</h5>
          <p>{camping[id].content}</p>
          <p>{camping[id].price + '원'}</p>
          <button className="btn btn-primary" onClick={() => {
            dispatch(addCart({ id: + id, title: camping[id].title, count: 1 }))
          }}>주문하기</button>
        </div>
      </div>


      <Nav className="denav" justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => {
            setTabNumber(0)
          }}>상세정보
          </Nav.Link>
          <div className='img-detail'>
            <img src={`https://raw.githubusercontent.com/sungchunp/image/main/${camping[id].detail}.jpg`} width="1000px" />
          </div>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => {
            setTabNumber(1)
          }}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => {
            setTabNumber(2)
          }}>Q&A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={() => {
            setTabNumber(3)
          }}>반품,교환정보</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tabNumber={tabNumber} />
    </>
  );
}

export default Detail;