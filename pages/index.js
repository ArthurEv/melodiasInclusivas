import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
      <>
        <Head>
          <title>Melodias Inclusivas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={`${styles.body} container-fluid`}>
          <div className={`${styles.row} row`}>
            <div className={`${styles.divImagem} col-8`}>
              <img className={styles.img} src='/index/logo.png' alt='Logo do site Melodias Inclusivas com animais tocando instrumentos musicais'/>
            </div>
            <div className={`${styles.divForm} col-md`}>
              <div className={styles.acessar}>
                <div className={styles.secaoTitulo}>
                  <h2 className={styles.titulo}>Acessar o site</h2>
                </div>
                <form>
                  <div className={styles.secaoInput}>
                    <label for="email" className={styles.label}><Image src="/index/email.png"  width={30} height={30}/>Email</label>
                    <input type='email' name="email" id='email' placeholder='Seu email' required className={styles.input}/>
                  </div>

                  <div className={styles.secaoInput}>
                    <label for='senha' className={styles.label}><Image src="/index/senha.png"  width={30} height={30}/>Senha</label>
                    <input type='password' name='senha' id='senha' placeholder='Sua senha' required className={styles.input}/>
                  </div>

                  <div className={styles.secaoBotao}>
                    <a  href="/cursos" className={styles.submit}>Entrar</a>

                    <Link href="/atualizar" className={styles.esqueceu}>Esqueceu sua senha?</Link>

                    
                  </div>
                </form>

                <button className={styles.cadastrar}><Link href="/cadastro">Cadastrar</Link></button>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
