import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./footer.module.css";

function Footer() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container >
        <Nav>
          {/* <Nav.Link href="#home">Главное</Nav.Link>
          <Nav.Link href="#features">Портфолио</Nav.Link>
          <Nav.Link href="#pricing">Контакты</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
