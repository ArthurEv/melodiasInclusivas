import Head from 'next/head'
import styles from '../styles/Cadastro.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>

      <div className={styles.body}>
        <div className={styles.cadastro}>
          <form>
            <h2 className={styles.titulo}>Cadastro</h2>

            <label className={styles.label} for='nome'><Image src="/cadastro/pessoa.png" width={25} height={25} />Nome completo</label>
            <input type='text' id='nome' className={styles.input} required />

            <label className={styles.label} for='email'><Image src="/cadastro/email.png" width={25} height={25} />Email</label>
            <input type='email' id='email' className={styles.input} required />

            <label className={styles.label} for='senha'><Image src="/cadastro/senha.png" width={25} height={25} />Senha</label>
            <input type='password' id='senha' className={styles.input} required />

            <label className={styles.label} for='confirmarSenha'><Image src="/cadastro/senha.png" width={25} height={25} />Confirmar senha</label>
            <input type='password' id='confirmarSenha' className={styles.input} required />

            <label className={styles.label} for='data'><Image src="/cadastro/data.png" width={25} height={25} />Data de nascimento</label>
            <input type='date' id='data' className={styles.input} required />

            <label className={styles.label} for='responsavel'><Image src="/cadastro/responsavel.png" width={27} height={27} />Nome de um responsável</label>
            <input type='text' id='responsavel' className={styles.input} required />

            <p className={styles.selecao}>Selecione um avatar</p>

            <div className={styles.imagens}>
              <input type='radio' name='avatar' id='leao' value="leao" className={styles.opcao} required />
              <label for='leao' className={styles.avatares}><img src='/avatares/leão.png' className={styles.img} /></label>

              <input type='radio' name='avatar' id='girafa' value="girafa" className={styles.opcao} />
              <label for='girafa' className={styles.avatares}><img src='/avatares/girafa.png' className={styles.img} /></label>

              <input type='radio' name='avatar' id='hipopotamo' value="hipopotamo" className={styles.opcao} />
              <label for='hipopotamo' className={styles.avatares}><img src='/avatares/hipopotamo.png' className={styles.img} /></label>
            </div>

            <div className={styles.divSubmit}>
              <input type='submit' value='Cadastrar' className={styles.submit} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
