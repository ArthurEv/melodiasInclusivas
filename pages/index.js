import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
// import { SyntheticEvent, useState } from 'react'
// import { signIn } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// 'use client'

export default function Home() {

  // const [email, setEmail] = useState <String>('')
  // const [password, setPassword] = useState <String>('')

  // const router = useRouter()

  // async function handleSubmit(event: SyntheticEvent){
  //   event.preventDefault()

  //   const result = await signIn('credential',{
  //     email,
  //     password,
  //     redirect: false
  //   })

  //   if(result?.error){
  //     console.log(result)
  //     return
  //   }

  //   router.replace('/cursos')
  // }

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
          <form
          //  onSubmit={handleSubmit}
           >

            <h2 className={styles.titulo}>Acessar o site</h2>

            <div>
              <label for="email" className={styles.label}><Image src="/index/email.png" width={30} height={30}/>Email</label>
              <input 
                type='email' 
                name="email" 
                id='email' 
                placeholder='Seu email' 
                required
                className={styles.input}
                // onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
              <label for='senha' className={styles.label}><Image src="/index/senha.png" width={30} height={30} />Senha</label>
              <input 
                type='password' 
                name='password' 
                id='senha' 
                placeholder='Sua senha' 
                required 
                className={styles.input}
                // onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <input type='submit' value="Entrar" className={styles.submit}/>

            <button className={styles.cadastrar}><Link href="/cadastro">Cadastrar</Link></button>
          </form>
        </div>
      </div>
    </>
  )
}
