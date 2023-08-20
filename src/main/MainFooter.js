import { Container } from "react-bootstrap";
import './MainFooter.css';
import { useNavigate } from "react-router-dom";

const MainFooter = () => {
  const navigate = useNavigate();

  return (
    <Container className="MainDetailBox">
      <div className="card1" style={{ width: "24rem" }}>
        <img src="../img/tent1.jpg" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">캠핑 텐트</h5>
          <p class="card-text">비, 바람을 막아주는 텐트 입니다</p>
        </div>
        <div class="card-body">
          <button onClick={() => { navigate('/detail/0') }}>상세페이지</button>
        </div>
      </div>


      <div className="card2" style={{ width: "22rem" }}>
        <img src="../img/피크닉 체어.jpg" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">캠핑 의자</h5>
          <p class="card-text">캠핑갔으면 앉아서 멍 때려야죠</p>
        </div>
        <div class="card-body">
          <button onClick={() => { navigate('/detail/24') }}>상세페이지</button>
        </div>
      </div>

      <div className="card3" style={{ width: "22rem" }}>
        <img src="../img/Lamp01.jpg" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">램프</h5>
          <p class="card-text">필수품! 밤되면 주변에 아무것도 안보임</p>
        </div>
        <div class="card-body">
          <button onClick={() => { navigate('/detail/27') }}>상세페이지</button>
        </div>
      </div>
    </Container>
  );
}

export default MainFooter;