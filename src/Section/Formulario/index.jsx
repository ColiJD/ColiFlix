import React from "react";
import { useState } from "react";
import Campo from "../../componentes/Campo";
import ListaCampo from "../../componentes/ListaCampo";
import TextoArea from "../../componentes/TextoArea";
import { TitulosPrincipales, Button } from "../../assets/base";
import { StyDivBotones, StyledBoton, StyledForm, StyledDiv, StyledFormulario } from "./StyledFormulario";
import { v4 } from "uuid";
import NuevaCategoria from "../../componentes/NuevaCategoria";


const Formulario = (props) => {
  const [titulo, setTitulo] = useState("")
  const [linkVideo, setlinkVideo] = useState("")
  const [linkImagen, setLinkimage] = useState("")
  const [categorias, setCategorias] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const { setPosts, setCategories, categories } = props;

  /*Nueva categoria*/

  const [mostrarNuevaCategoria, actualizarNuevaCategoria] = useState(false);
  const cambiarMostrar = () => {
    actualizarNuevaCategoria(!mostrarNuevaCategoria);
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (titulo === "" || linkVideo === "" || linkImagen === "" || categorias === "" || descripcion === "") {
      alert("Por favor, complete todos los campos antes de guardar.");
      return;
    } else {
      let datos = {
        id: v4(),
        titulo,
        linkVideo,
        linkImagen,
        descripcion,
        categorias
      }
      fetch("http://localhost:5000/videos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(datos)
      }).then((res) => {
        alert("Se guardo con exito")
        setPosts((prevPosts) => [...prevPosts, datos]);
      }
      ).catch((err) => console.log(err))
    }
  }

  const limpiarCampos = () => {
    setTitulo("");
    setlinkVideo("");
    setLinkimage("");
    setCategorias("");
    setDescripcion("");
  };

  return (
    <StyledFormulario className="formulario">
      <StyledForm >
        <TitulosPrincipales >Nuevo Video</TitulosPrincipales>
        <Campo placeholder="Titulo" required valor={titulo} setValor={setTitulo} />
        <Campo placeholder="Link del video" required valor={linkVideo} setValor={setlinkVideo} />
        <Campo placeholder="Link de imagen del video" required valor={linkImagen} setValor={setLinkimage} />
        <ListaCampo required valor={categorias} setValor={setCategorias} setCategories={setCategories} categories={categories}/>
        <TextoArea placeholder="Descripcion" valor={descripcion} setValor={setDescripcion} />
        <StyledDiv>
          <StyDivBotones>
            <Button onClick={manejarEnvio} >Guardar </Button>
            <Button onClick={limpiarCampos}>Limpiar</Button>
          </StyDivBotones>
          <div>
            <StyledBoton onClick={cambiarMostrar}>Nueva Categoria</StyledBoton>
          </div>
        </StyledDiv>
      </StyledForm>
      {mostrarNuevaCategoria === true ? <NuevaCategoria setCategories={setCategories} /> : <></>}
    </StyledFormulario>

  )
}
export default Formulario;