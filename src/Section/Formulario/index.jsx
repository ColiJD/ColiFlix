import { useState } from "react";
import "./Formulario.css";
import Campo from "../../componentes/Campo";
import Boton from "../../componentes/Boton";
import ListaCampo from "../../componentes/ListaCampo";
import TextoArea from "../../componentes/TextoArea";


const Formulario = (props) => {
    const [titulo, setTitulo] = useState("")
    const [linkVideo, setlinkVideo] = useState("")
    const [linkImagen, setLinkimage] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")


    const manejarEnvio = (e) => {
        e.preventDefault();
        let datos = {
            titulo,
            linkVideo,
            linkImagen,
            descripcion,
            categoria
        }
        console.log(datos);
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2 >Nuevo Video</h2>
                <Campo placeholder="Titulo" required valor={titulo} setValor={setTitulo} />
                <Campo placeholder="Link del video" required valor={linkVideo} setValor={setlinkVideo} />
                <Campo placeholder="Link de imagen del video" required valor={linkImagen} setValor={setLinkimage} />
                <ListaCampo required valor={categoria} setValor={setCategoria} />
                <TextoArea placeholder="Descripcion" required valor={descripcion} setValor={setDescripcion} />
                <div className="formulario-button">
                    <Boton texto="Guardar" />
                    <Boton texto="Limpiar" colorSecundario="#9E9E9E" colorPrimario="#000" />
                    <Boton texto="Nueva Categoria" />
                </div>


            </form>
        </section>
    )
}
export default Formulario;