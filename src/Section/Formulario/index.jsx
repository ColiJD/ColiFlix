import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Campo from "../../componentes/Campo";
import ListaCampo from "../../componentes/ListaCampo";
import TextoArea from "../../componentes/TextoArea";
import { blanco } from "../../assets/base/Variables";
import { TitulosPrincipales, Button } from "../../assets/base";

const StyledFormulario = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap:  wrap;
    gap: 20px;
    color: ${blanco};
    background-color: #000;

    @media screen and (max-width:480px){
        margin: 0;
    }
`
const StyledForm = styled.form`
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 25%);
    border-radius: 20px;
    padding: 8px 100px;
    flex: 1;

    @media screen and (max-width:480px){
        box-shadow: none;
        padding: 8px 5px;
    }
`
const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyDivBotones = styled.div`
   *:first-child {
    margin-right: 2rem;
    }
    @media screen and (max-width:720px){
       *:first-child {
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
        }
    }
`
const StyledBoton = styled(Button)`
    background-color: gray;
    color: black;
`


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
        <StyledFormulario className="formulario">
            <StyledForm onSubmit={manejarEnvio}>
                <TitulosPrincipales >Nuevo Video</TitulosPrincipales>
                <Campo placeholder="Titulo" required valor={titulo} setValor={setTitulo} />
                <Campo placeholder="Link del video" required valor={linkVideo} setValor={setlinkVideo} />
                <Campo placeholder="Link de imagen del video" required valor={linkImagen} setValor={setLinkimage} />
                <ListaCampo required valor={categoria} setValor={setCategoria} />
                <TextoArea placeholder="Descripcion" required valor={descripcion} setValor={setDescripcion} />
                <StyledDiv>
                    <StyDivBotones>
                        <Button>Guardar</Button>
                        <Button>Limpiar</Button>
                    </StyDivBotones>
                    <div>
                        <StyledBoton>Nueva Categoria</StyledBoton>
                    </div>
                </StyledDiv>
            </StyledForm>
        </StyledFormulario>
    )
}
export default Formulario;