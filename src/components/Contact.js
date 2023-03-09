import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
 
  return (
    <section className="contact" id="sobre">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={10} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Connect-se a ideia!</h2>
                  <p id="connect">O projeto Programadores Cariocas foi pensado para seguir um cronograma de 6 meses, no estilo de bootcamp.
                    <br/>
                    <br/>
                    Durante esse período nossos alunos contarão com uma ajuda financeira de R$ 500,00 para manter a sua permanência no projeto.
                  </p>
                  <br/>
                  <h2 id="font-good">Achou bom? Ainda tem mais!</h2>
                  <p id="connect">Após a conclusão e aprovação de todos os módulos de aprendizagem, nossos alunos recebem o Certificado Full Stack Web Developer e um notebook.</p>
                    <p id="connect">Muito bom, não é mesmo?
                      <br/>
                      <br/>
                       Não perca tempo e inscreva-se neste programa que vai mudar a sua vida e transformar o Rio de Janeiro na capital da inovação e tecnologia do Brasil!</p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
