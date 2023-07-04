import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Campo from "../../componentes/Campo";
import { TitulosPrincipales, Button } from "../../assets/base";
import { StyledForm, StyledDiv } from "../../Section/Formulario/StyledFormulario";

const StyledFormC = styled(StyledForm)`
  padding-left: 0;

  @media screen and (max-width:768px){
      padding: 8px 2rem;
  }

  @media screen and (max-width:480px){
        box-shadow: none;
        padding: 8px 5px;
    }
`
const StyledDi = styled(StyledDiv)`
  flex-wrap: wrap;
  padding: 0 2rem;

  *:first-child {
      margin-right: 0;
        }
`

const StyledBoton = styled(Button)`
  margin: 0.75rem 0;
`

const NuevaCategoria = (props) => {
  const [nombre, setNombre] = useState("")
  const { setCategories } = props;

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
      fetch("https://json-server-361u.onrender.com/categorias", {
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

  const EliminarCategoria = (e) => {
    e.preventDefault();
    if (nombre === "") {
      alert("Por favor, complete todos los campos antes de guardar.");
      return;
    } else {
      let datos = {
        id: nombre.toLowerCase(),
      }
      fetch(`https://json-server-361u.onrender.com/categorias/${datos.id}`, {
        method: "Delete",
      }).then((res) => {
        alert("Se elimino con exito")
        setCategories((prevCategories) => [...prevCategories, datos.id]);
      }
      ).catch((err) => console.log(err))
    }
  }


  const limpiarCampos = (e) => {
    e.preventDefault();
    setNombre("");
  };

  return (
    <StyledFormC >
      <TitulosPrincipales >Nueva Categoria</TitulosPrincipales>
      <Campo placeholder="Nueva Categoria" required valor={nombre} setValor={setNombre} />
      <StyledDi>
        <StyledBoton onClick={manejarEnvio} >Guardar</StyledBoton>
        <StyledBoton onClick={limpiarCampos} formNoValidate>Limpiar</StyledBoton>
        <StyledBoton onClick={EliminarCategoria} formNoValidate>Eliminar</StyledBoton>
      </StyledDi>
    </StyledFormC>
  )
}
export default NuevaCategoria;