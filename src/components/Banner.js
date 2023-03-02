import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["PROGRAMADORES CARIOCAS"];
  const period = 3000;

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Seja Bem-Vindo!</span>
                  <h1> Programadores cariocas</h1>
                  <br />
                  <p id="text-banner">
                    É uma iniciativa de política pública da Prefeitura da cidade
                    do Rio de Janeiro, que está sendo lançada pela Secretaria de
                    Desenvolvimento Econômico, Inovação e Simplificação
                    (SMDEIS), batizada de Programadores Cariocas. O projeto é
                    realizado junto a instituições previamente selecionadas, é
                    destinada a refugiados e egressos da rede pública com ensino
                    médio completo, com prioridade para negros, mulheres e
                    trans. A meta é formar cinco mil profissionais até 2024.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                ></div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
