import { Container } from "react-bootstrap";
import "./MainNavbar.css";

const MainNavbar = () => {
  return (
    <Container className="navname">
    <nav>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">텐트/타프</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">테이블</a>
          {/* <button type="button" class="btn btn-warning">테이블</button> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">의자</a>
          {/* <button type="button" class="btn btn-warning">의자</button> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">조명</a>
          {/* <button type="button" class="btn btn-warning">조명</button> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">화로</a>
          {/* <button type="button" class="btn btn-warning">화로</button> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">계절용품</a>
          {/* <button type="button" class="btn btn-warning">계절용품</button> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">조리도구</a>
          {/* <button type="button" class="btn btn-warning">조리도구</button> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">액세서리</a>
          {/* <button type="button" class="btn btn-warning">액세서리</button> */}
        </li>
      </ul>
    </nav>
    </Container>
    
    // <Container>
    //   <img src="d"/>
    // </Container>
  )
}

export default MainNavbar;