import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

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
          <form>

            <h2 className={styles.titulo}>Acessar o site</h2>

            <div>
              <label for="email" className={styles.label}><Image src="/index/email.png" width={30} height={30} />Email</label>
              <input type='email' name="email" id='email' placeholder='Seu email' required className={styles.input} />
            </div>

            <div>
              <label for='senha' className={styles.label}><Image src="/index/senha.png" width={30} height={30} />Senha</label>
              <input type='password' name='senha' id='senha' placeholder='Sua senha' required className={styles.input} />
            </div>

            <a href="/cursos" className={styles.submit}>Entrar</a>

            <button className={styles.cadastrar}><Link href="/cadastro">Cadastrar</Link></button>
          </form>
        </div>
      </div>
    </>
  )
}
