import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logofooter.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={20} sm={12}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col className="text-md-center">
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
