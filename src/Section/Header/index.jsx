import './Header.css'
import Boton from "../../componentes/Boton/index"

const Header = (props) => {
    return (<section className="header">
        <h1 className='header-nombre'>JDFLIX</h1>
        <Boton cambiarMostrar={props.cambiarMostrar} texto="Nuevo Video" colorSecundario="#000" colorPrimario="#fff"></Boton>
    </section>
    )
}

export default Header 