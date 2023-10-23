import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import CaixaPadrão from "../components/CaixaPadrão.js"

export default function Aulas(){
    return(
        <>
         <div className="body">

            <div className="menu">
                <Menu/>
            </div>

            <div className="meio">
                <CaixaPadrão titulo="Fóruns" link="/forum"/>
            </div>

            <div className="footer">
                <Footer/>
            </div>

            </div>
        </>
    )
}