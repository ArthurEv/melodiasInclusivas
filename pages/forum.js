import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import styles from "../styles/Forum.module.css"

export default function Aulas(){
    return(
        <>
        <div className="body">

            <div className="menu">
                <Menu/>
            </div>

            <div className="meio">
                <div className={styles.caixa}>
                    <div className={styles.principal}>
                        <div className={styles.cima}>
                            <h2>Nome do tópico</h2>
                            <h3>Descrição do tópico</h3>
                        </div>

                        <div className={styles.baixo}>
                            <div className={styles.chat}>

                                <div>
                                    <span>Nome de outro usuario</span>
                                    <div className={styles.outros}>
                                        <img src="/avatares/leão.png"/>
                                        <div>
                                            <p>Consegui acabar as páginas</p>
                                            <p>Só preciso arrumar alguns detalhes</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.usuario}>
                                    <p>Oi outros! Gostaria de tirar uma dúvida</p>
                                    <img src="/avatares/hipopotamo.png"/>
                                </div>

                                <div>
                                    <span>Nome de outro usuario</span>
                                    <div className={styles.outros}>
                                        <img src="/avatares/leão.png"/>
                                        <div>
                                            <p>Nome de outro usuário</p>
                                            <p>Olá aluno querido!</p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={styles.usuario}>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by</p>
                                    <img src="/avatares/hipopotamo.png"/>
                                </div>
                            </div>

                            
                                <forms className={styles.digitar}>
                                    <input type="text"/>
                                    <button type="submit"><img src="/enviar.png"/></button>
                                </forms>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <Footer/>
            </div>
            
        </div>
        </>
    )
}