import Head from 'next/head'
import styles from '../styles/Cadastro.module.css'
import Image from 'next/image'
import axios from 'axios'

export default function Home() {

  const cadastrar = (e) => {
    e.preventDefault()
    let nome = e.target.nome.value
    let email = e.target.email.value
    let senha = e.target.senha.value
    let confirmarSenha = e.target.confirmarSenha.value
    let nascimento = e.target.nascimento.value
    let responsavel = e.target.responsavel.value
    let avatar = e.target.avatar.value

    if (senha != confirmarSenha) {
      alert('As senhas não coincidem')
    } else {
      axios.post("http://127.0.0.1:5000/aluno", {
        "nome": nome,
        "email": email,
        "senha": senha,
        "nascimento": nascimento,
        "responsavel": responsavel,
        "avatar": avatar
      }).then((response) => {
        console.log(response.data)
        alert('Cadastro realizado com sucesso!')
        window.location.href = '/'
      }).catch((error) => {
        console.log(error)
        alert('Erro ao cadastrar')
      })
    }

  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>

      <div className={styles.body}>
        <div className={styles.cadastro}>
          <form  onSubmit={cadastrar}>
            <h2 className={styles.titulo}>Cadastro</h2>

            <label className={styles.label} for='nome'><Image src="/cadastro/pessoa.png" width={25} height={25} />Nome completo</label>
            <input type='text' id='nome' name='nome' className={styles.input} required />

            <label className={styles.label} for='email'><Image src="/cadastro/email.png" width={25} height={25} />Email</label>
            <input type='email' id='email' name='email' className={styles.input} required />

            <label className={styles.label} for='senha'><Image src="/cadastro/senha.png" width={25} height={25} />Senha</label>
            <input type='password' id='senha' name='senha' className={styles.input} required />

            <label className={styles.label} for='confirmarSenha'><Image src="/cadastro/senha.png" width={25} height={25} />Confirmar senha</label>
            <input type='password' id='confirmarSenha' name='confirmarSenha' className={styles.input} required />

            <label className={styles.label} for='data'><Image src="/cadastro/data.png" width={25} height={25} />Data de nascimento</label>
            <input type='date' id='data' name='nascimento' className={styles.input} required />

            <label className={styles.label} for='responsavel'><Image src="/cadastro/responsavel.png" width={27} height={27} />Nome de um responsável</label>
            <input type='text' id='responsavel' name='responsavel' className={styles.input} required />

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
              <input type='submit' value='Cadastrar' className={styles.submit}/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
