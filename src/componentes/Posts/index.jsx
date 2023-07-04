
import React from "react"
import { StyledDivContent, StyledImagenes } from "../../Section/Categoria/StyledCategoria"
import { Link } from "react-router-dom"
import styled from "styled-components"



const StylesTitulo = styled.h3`
color: #fff;
position: absolute;
top: 160px;
left: 20px;
padding: 0.5rem;
border-radius: 20%;
`
const StyledContet = styled(StyledDivContent)`
  margin-bottom: 0.3rem;
`

const PostArrys = (props) => {
  const { id, titulo, linkImagen} = props.datos;

  return <div>
    <Link to={`/videos/${id}`} key={id} >
      <StyledContet >
        <StylesTitulo >{titulo}</StylesTitulo>
        <StyledImagenes src={linkImagen} alt='Imagen del video' />
      </StyledContet>
    </Link>

  </div>
}

export default PostArrys;