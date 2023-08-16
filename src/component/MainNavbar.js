import { Container, Nav } from "react-bootstrap";
import "./MainNavbar.css";
import { Navigate } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Container className="navname">
    <nav>
      <ul class="nav justify-content-center">
        <Nav className="nav-item">
          <Nav.Link onClick={() => { Navigate('/tenttarp') }}>텐트/타프</Nav.Link>
          <Nav.Link onClick={() => { Navigate('/table') }}>테이블</Nav.Link>
          <Nav.Link onClick={() => { Navigate('/chair') }}>의자</Nav.Link>
          <Nav.Link onClick={() => { Navigate('/lamp') }}>조명</Nav.Link>
          <Nav.Link onClick={() => { Navigate('/brazier') }}>화로</Nav.Link>
          <Nav.Link onClick={() => { Navigate('/segoods') }}>계절용품</Nav.Link>
          <Nav.Link onClick={() => { Navigate('/cookware') }}>조리도구</Nav.Link>
          <Nav.Link onClick={() => { Navigate('/accessory') }}>액세서리</Nav.Link>
        </Nav>
      </ul>
    </nav>
    </Container>
  )
}

export default MainNavbar;