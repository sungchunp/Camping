import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
  const navigate = useNavigate();



  return (
    <Navbar>
      <Container className="header">

        <Nav href="/" onClick={() => navigate('/')} >
          <img
            src="../img/Logo.png"
            className="d-inline-block"
            alt="Logo"
          />
        </Nav>



        <form classNamess="d-flex" role="search">
          <input classNamess="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button classNameass="btn btn-outline-warning" type="submit">Search</button>
        </form>



        <Nav className="LoginSingupcart">
          {/* 로그인, 회원가입, 장바구니 링크 */}
          <Nav.Link className="LoginSingup" onClick={() => { navigate('/LoginSingup') }}>로그인/회원가입</Nav.Link>
          <Nav.Link className="cart" onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
      
  );
}

export default Header;