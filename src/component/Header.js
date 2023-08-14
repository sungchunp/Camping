import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import  './Header.css';

const Header = () => {
  const navigate = useNavigate();



  return (
    <Navbar>
      <Container className="header">
       
        <Navbar.Brand href="#home">
          <img
            src="../img/Logo.png"
            className="d-inline-block"
          />
        </Navbar.Brand>
      

      
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-warning" type="submit">Search</button>
        </form>
      

      
        <Nav className="ljc">
          <Nav.Link className="login" onClick={() => { navigate('/login') }}>로그인</Nav.Link>
          <Nav.Link className="join" onClick={() => { navigate('/join') }}>회원가입</Nav.Link>
          <Nav.Link className="cart" onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
        </Nav>

        </Container>
    </Navbar>
  );
}

export default Header;