import "./App.css";
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Carousel } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="set_index">
          <Container fluid>
            <Navbar.Brand href="#">Second Life</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Carousel className="top_bg">
        <Carousel.Item>
          <img className="d-block w-100" src={process.env.PUBLIC_URL + "img/benner_img_01.png"} alt="First slide" />
          <Carousel.Caption>
            <h3>
              THE MONSTER
              <br />
              IN OUR CLOSET
            </h3>
            <p>
              무심코 입고 버리는 옷들의 탄생과정 부터 폐기되기 까지의 숨겨진 과정들을 모두 알고있나요?<br/>세컨드라이프와
              함께 지속가능한 의류 소비 습관을 만들어보세요.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={process.env.PUBLIC_URL + "img/Bg-image.png"} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={process.env.PUBLIC_URL + "img/Bg-image.png"} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
