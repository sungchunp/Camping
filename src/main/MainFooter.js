import { Container } from "react-bootstrap";
import './MainFooter.css';
import { useNavigate } from "react-router-dom";

//메인 slide밑에 나오게 footer는 따로 또 제작
//중복 코드 수 줄이기

const MainFooter = () => {
  const navigate = useNavigate();

  return (
    <Container className="MainDetailBox">
      <div className="card1" style={{ width: "24rem" }}>
        <img src="../img/tent1.jpg" className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">캠핑 텐트</h5>
          <p className="card-text">비, 바람을 막아주는 텐트 입니다</p>
        </div>
        <div className="card-body">
          <button onClick={() => { navigate('/detail/0') }}>상세페이지</button>
        </div>
      </div>


      <div className="card2" style={{ width: "22rem" }}>
        <img src="../img/피크닉 체어.jpg" className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">캠핑 의자</h5>
          <p className="card-text">캠핑갔으면 앉아서 멍 때려야죠</p>
        </div>
        <div className="card-body">
          <button onClick={() => { navigate('/detail/24') }}>상세페이지</button>
        </div>
      </div>

      <div className="card3" style={{ width: "22rem" }}>
        <img src="../img/Lamp01.jpg" className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">램프</h5>
          <p className="card-text">필수품! 밤되면 주변에 아무것도 안보임</p>
        </div>
        <div className="card-body">
          <button onClick={() => { navigate('/detail/27') }}>상세페이지</button>
        </div>
      </div>
    </Container>
  );
}

export default MainFooter;