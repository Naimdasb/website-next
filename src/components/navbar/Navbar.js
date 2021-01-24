import Link from 'next/link'
import { Navbar, Nav, Container, Col } from 'react-bootstrap'

export const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='justify-content-between'>
                <Navbar.Brand>Valente Douglas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-5">
                        <Link href='/'>Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/contact'>Contact</Link>
                        <Link href='/blog'>Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}