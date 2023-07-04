import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Campo from "../../componentes/Campo";
import { TitulosPrincipales, Button } from "../../assets/base";
import { StyledForm, StyledDiv } from "../../Section/Formulario/StyledFormulario";

const StyledFormC = styled(StyledForm)`
  padding-left: 0;
`
const StyledDi = styled(StyledDiv)`
  padding: 0 2rem;
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

  const EliminarCategoria = (e) => {
    e.preventDefault();
    if (nombre === "") {
      alert("Por favor, complete todos los campos antes de guardar.");
      return;
    } else {
      let datos = {
        id: nombre.toLowerCase(),
      }
      fetch(`http://localhost:5000/categorias/${datos.id}`, {
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
        <Button onClick={manejarEnvio} >Guardar </Button>
        <Button onClick={limpiarCampos} formNoValidate>Limpiar</Button>
        <Button onClick={EliminarCategoria} formNoValidate>Eliminar</Button>
      </StyledDi>
    </StyledFormC>
  )
}
export default NuevaCategoria;