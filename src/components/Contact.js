import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviado");
    let response = await fetch("http://localhost:3001/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "access-control-allow-origin" : "*"
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    console.log(formDetails)
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
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
                  <h2>Achou bom? Ainda tem mais!</h2>
                  <p id="connect">Após a conclusão e aprovação de todos os módulos cursados, os nossos alunos receberão o certificado de Desenvolvedor Web Full Stack
                    e 1 notebook.</p>
                    <p>Muito bom não é mesmo?
                      <br/>
                      <br/>
                       Não perca tempo e inscreva-se nesse projeto que irá mudar a sua vida e transformar o Rio de Janeiro
                      na capital da inovação e tecnologia do Brasil!</p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
