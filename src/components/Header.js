import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/1573SpkP/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"
              width="40"
              height="35"
              className="d-inline-block align-top"
            />{' '}
              Kitchen Mania
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default header