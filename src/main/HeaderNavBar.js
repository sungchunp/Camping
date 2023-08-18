import { Container, Nav } from "react-bootstrap";
import "./HeaderNavBar.css";
import { useNavigate } from "react-router-dom";

const HeaderNavBar = () => {
  const navigate = useNavigate();

  return (
    <Container className="navname">
      <nav>
        <ul className="nav justify-content-center">
          <Nav className="nav-item">
            <Nav.Link onClick={() => { navigate('/tenttarp') }}>텐트/타프</Nav.Link>
            <Nav.Link onClick={() => { navigate('/table') }}>테이블</Nav.Link>
            <Nav.Link onClick={() => { navigate('/chair') }}>의자</Nav.Link>
            <Nav.Link onClick={() => { navigate('/lamp') }}>조명</Nav.Link>
            <Nav.Link onClick={() => { navigate('/brazier') }}>화로</Nav.Link>
            <Nav.Link onClick={() => { navigate('/segoods') }}>계절용품</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cookware') }}>조리도구</Nav.Link>
            <Nav.Link onClick={() => { navigate('/accessory') }}>액세서리</Nav.Link>
          </Nav>
        </ul>
      </nav>
    </Container>
  )
}

export default HeaderNavBar;