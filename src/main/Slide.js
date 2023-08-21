import { Carousel, Container } from "react-bootstrap";
import './Slide.css';

//중복 코드 수 줄이기

const Slide = () => {
  return (
    <>
      <Container className="slideimg">
        <Carousel fade>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_01.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_02.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_03.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_04.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_05.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_06.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_07.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_08.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_09.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class="imgBox">
              <img src="../img/camping_main_10.jpg" />
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </Container>
    </>
  );
}

export default Slide;