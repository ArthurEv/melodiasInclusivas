import Menu from "../components/Menu.js"
import MenuTeste from "../components/MenuTeste.js"
import Footer from "../components/Footer.js"
import Link from "next/link.js"
import styles from "../styles/Aula.module.css"

export default function Aulas(){
    return(
        <>
        <div className="body">

            <div className="menu">
                <Menu/>
                <MenuTeste/>
            </div>

            <div className="meio">
                <div className={styles.caixa}>

                    <h2>Noções iniciais do violão</h2>

                    <p>Descrição: Nesta aula você irá aprender as noções básicas do violão, como o apoio e a função das mãos, assim como as partes do instrumento</p>

                    <section>
                        <video src="" type="video/mp4"></video>
                        
                        <Link href="aula"><button>Próxima aula→</button></Link>
                    </section>
                </div>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
        </>
    )
}