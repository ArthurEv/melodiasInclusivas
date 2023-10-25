import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import styles from "../styles/Professor.module.css"

export default function Aulas() {
    return (
        <>
            <header>
                <title>Conversar com professor</title>
            </header>

            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <div className={styles.caixa}>
                        <div className={styles.principal}>
                            <div className={styles.cima}>
                                <img src="/professor.png" />
                                <h2>Nome do professor</h2>
                            </div>

                            <div className={styles.baixo}>
                                <div className={styles.chat}>
                                    <div className={styles.professor}>
                                        <img src="professor.png" />
                                        <div>
                                            <p>Olá aluno querido!</p>
                                            <p>Olá aluno querido!</p>
                                            <p>Olá aluno querido!</p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by </p>
                                        </div>
                                    </div>
                                    <div className={styles.aluno}>
                                        <p>Oi professor! Gostaria de tirar uma dúvida</p>
                                        <img src="/avatares/hipopotamo.png" />
                                    </div>

                                    <div className={styles.professor}>
                                        <img src="professor.png" />
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by </p>
                                    </div>
                                    <div className={styles.aluno}>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by</p>
                                        <img src="/avatares/hipopotamo.png" />
                                    </div>
                                </div>


                                <forms className={styles.digitar}>
                                    <input type="text" />
                                    <button type="submit"><img src="/enviar.png" /></button>
                                </forms>

                            </div>
                        </div>
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}