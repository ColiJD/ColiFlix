import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Campo from "../../componentes/Campo";
import { TitulosPrincipales, Button } from "../../assets/base";
import { StyDivBotones, StyledForm, StyledDiv } from "../../Section/Formulario/StyledFormulario";
import { v4 } from "uuid";

const StyledFormC = styled(StyledForm)`
  padding-left: 0;
`

const NuevaCategoria = (props) => {
  const [nombre, setNombre] = useState("")
  const {setCategories} = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre === "") {
      alert("Por favor, complete todos los campos antes de guardar.");
      return;
    } else {
      let datos = {
        id: nombre.toLowerCase(),
        nombre,
      }
      fetch("http://localhost:5000/categorias", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(datos)
      }).then((res) => {
        alert("Se guardo con exito")
        setCategories((prevCategories) => [...prevCategories, datos]);
      }
      ).catch((err) => console.log(err))
    }
  }

  const limpiarCampos = () => {
    setNombre("");
  };

  return (
    <StyledFormC >
      <TitulosPrincipales >Nueva Categoria</TitulosPrincipales>
      <Campo placeholder="Nueva Categoria" required valor={nombre} setValor={setNombre} />
      <StyledDiv>
        <StyDivBotones>
          <Button onClick={manejarEnvio} >Guardar </Button>
          <Button onClick={limpiarCampos}>Limpiar</Button>
        </StyDivBotones>
      </StyledDiv>
    </StyledFormC>
  )
}
export default NuevaCategoria;