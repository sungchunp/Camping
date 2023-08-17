import { Container } from "react-bootstrap";
import './MainFooter.css';
import { useNavigate } from "react-router-dom";
import data from "../campingData";

const MainFooter = () => {
  const navigate = useNavigate();

  return (
    <Container className="MainDetailBox">
      <div className="card1" style={{ width: "24rem" }}>
        <img src="../img/tent1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">캠핑 텐트</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-body">
          <button onClick={() => { navigate('/detail/0') }}>상세페이지</button>
        </div>
      </div>


      <div className="card2" style={{ width: "22rem" }}>
        <img src="../img/Chair01.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">캠핑 의자</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-body">
          <button onClick={() => { navigate('/detail/24') }}>상세페이지</button>
        </div>
      </div>

      <div className="card3" style={{ width: "22rem" }}>
        <img src="../img/Lamp01.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">램프</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-body">
          <button onClick={() => { navigate('/detail/31') }}>상세페이지</button>
        </div>
      </div>
    </Container>
  );
}

export default MainFooter;