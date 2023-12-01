import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="./logorestaurant.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <strong className='p-3 mt-5'>Find Best</strong>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header