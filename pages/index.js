import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

  const entrar = (e) => {
    e.preventDefault()
    
    let email = e.target.email.value
    let senha = e.target.password.value

    axios.post('http://127.0.0.1:5000/verificarAluno', {
      "email": email,
      "senha": senha
    }).then((response) => {
      if(response.data.length > 0){
        window.location.href = "/cursos"
      }else{
        alert("Email ou senha incorretos")
      }
    })
  }


export default function Home() {

  return (
    <>
      <Head>
        <title>Melodias Inclusivas</title>
      </Head>

      <div className={`${styles.body} body`}>
        <div className={styles.divImagem}>
          <img className={styles.img} src='/index/logo.png' alt='Logo do site Melodias Inclusivas com animais tocando instrumentos musicais' />
        </div>

        <div className={styles.acessar}>
          <form onSubmit={entrar}>

            <h2 className={styles.titulo}>Acessar o site</h2>

            <div>
              <label for="email" className={styles.label}><Image src="/index/email.png" width={30} height={30} />Email</label>
              <input
                type='email'
                name="email"
                id='email'
                placeholder='Seu email'
                className={styles.input}
                required
              />
            </div>

            <div>
              <label for='senha' className={styles.label}><Image src="/index/senha.png" width={30} height={30} />Senha</label>
              <input
                type='password'
                name='password'
                id='senha'
                placeholder='Sua senha'
                className={styles.input}
                required
              />
            </div>

            {/* <Login/> */}
            <input type='submit' value="Entrar" className={styles.submit} />

            <button className={styles.cadastrar}><Link href="/cadastro">Cadastrar</Link></button>
          </form>
        </div>
      </div>
    </>
  )
}
