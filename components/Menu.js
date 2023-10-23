import Link from "next/link"
import Image from "next/image"
import styles from '../styles/components/Menu.module.css'

export default function Menu(){
    return(
        <>
        <nav className={styles.nav}>
            <div>
                <h1>Melodias Inclusivas</h1>
            </div>
            <div className={styles.links}>
                <ul>
                    <li><Link href="/cursos"><Image src="/menu/cursos.png" width={40} height={40}/>Cursos</Link></li>
                    <li><Link href="/professor"><Image src="/menu/professor.png" width={40} height={40}/>Conversar<br/>com professor</Link></li>
                    <li><Link href="/foruns"><Image src="/menu/forum.png" width={40} height={40}/>Fórum</Link></li>
                </ul>
            </div>

            <div>
                <a className={styles.usuario}>
                    <img src='/avatares/hipopotamo.png' className={styles.avatar}/>
                    <p>Nome de usuário</p>
                </a>
            </div>
        </nav>
        </>
    )
}