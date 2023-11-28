import { useSession, signIn, signOut } from "next-auth/react";
// import axios from "axios";

// const verificarEmail = (email) => {
//   axios.get(`http://http://127.0.0.1:5000/verificarEmail/${email}`).then((response) => {
//     console.log(response.data)
//   })
// }

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    if(!session.id_user){
      session.id_user = 1 
    }else{
      console.log(session.id_user)
    }
    return (
      <>
        <button onClick={() => signOut()}>Sair</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Entrar</button>
    </>
  )
}