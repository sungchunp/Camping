import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      navigate(`/detail/${searchQuery}`);
    }
  };


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

        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
        <input
            className="form-control me-2" //me-2 : margin end
            type="search"
            placeholder="검색어를 입력하세요"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
          <button className="btn btn-outline-warning" type="submit">검색</button>
        </form>

        <Nav className="LoginSingupcart">
          <Nav.Link className="LoginSingup" onClick={() => { navigate('/LoginSingup') }}>로그인/회원가입</Nav.Link>
          <Nav.Link className="cart" onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
      
  );
}

export default Header;