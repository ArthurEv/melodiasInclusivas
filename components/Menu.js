import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import styles from '../styles/components/Menu.module.css'
import { useState, useEffect } from "react"
import axios from "axios"

export default function Menu() {

  let [aluno, setAluno] = useState({avatar:"",email:"",id:"",nascimento:"",nome:"",responsavel:"",senha:""})

  useEffect(() => {
      obtemAluno()
      console.log(aluno.avatar)
  }, [])

  const obtemAluno = () => {
      axios.get('http://127.0.0.1:5000/aluno/1').then((response) => {
           setAluno(response.data[0])
           
      })
  }

  return (
    <>

      <Navbar expand="lg" className={`${styles.nav} bg-body-tertiary`}>
        <Container className={styles.container}>
          <Navbar.Brand href="/cursos" className={styles.titulo}>Melodias Inclusivas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.divLinks}>
            <Nav className={`${styles.links} me-auto`}>
              <Nav.Link href="/cursos"><Image src="/menu/cursos.png" width={35} height={35} />Cursos</Nav.Link>
              <Nav.Link href="/foruns"><Image src="/menu/forum.png" width={35} height={35} />Fóruns</Nav.Link>
              <div className={styles.usuario}>
                <img src={`/avatares/${aluno.avatar}.png`} className={styles.img} />
                <NavDropdown title={aluno.nome} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/atualizar"  className={styles.NavDropdown}>Atualizar informações</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" className={styles.NavDropdown}>Sair</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}