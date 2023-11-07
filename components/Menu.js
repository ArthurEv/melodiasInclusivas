import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import styles from '../styles/components/Menu.module.css'
import { useState, useEffect } from "react"
import axios from "axios"

export default function Menu() {

  // let [aluno, setAluno] = useState([])

  // useEffect(() => {
  //     obtemAluno()
  // }, [])

  // const obtemAluno = () => {
  //     axios.get('http://127.0.0.1:5000/aluno/1').then((response) => {
  //          setAluno(response.data)
  //          console.log(aluno[0].nome)
           
  //     })
  // }

  return (
    <>

      <Navbar expand="lg" className={`${styles.nav} bg-body-tertiary`}>
        <Container className={styles.container}>
          <Navbar.Brand href="/cursos" className={styles.titulo}>Melodias Inclusivas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.divLinks}>
            <Nav className={`${styles.links} me-auto`}>
              <Nav.Link href="/cursos"><Image src="/menu/cursos.png" width={35} height={35} />Cursos</Nav.Link>
              <Nav.Link href="/professor"><Image src="/menu/professor.png" width={35} height={35} />Conversar<br />com professor</Nav.Link>
              <Nav.Link href="/foruns"><Image src="/menu/forum.png" width={35} height={35} />Fórum</Nav.Link>
              <div className={styles.usuario}>
                <img src='/avatares/hipopotamo.png' className={styles.img} />
                <NavDropdown title="nome de usuário" id="basic-nav-dropdown">
                  <NavDropdown.Item href="atualizar">Atualizar informações</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">Sair</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}