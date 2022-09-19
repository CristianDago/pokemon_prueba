import React from 'react'
import {Navbar, Container, Row, Col, Button} from 'react-bootstrap';

const Header = () => {

return (
    <>
        <Navbar  className="bg-azul">
          <Container fluid className="justify-content-center">
            <Row>
              <Col>
                <div class="logo"></div>
              </Col>
           </Row>
          </Container>
        </Navbar>

    </>
)
}

export default Header