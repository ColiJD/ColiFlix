
import React from "react"
import { StyledDivContent, StyledImagenes } from "../../Section/Categoria/StyledCategoria"
import { Link } from "react-router-dom"


const PostArrys = (props) => {
    const { id, titulo, linkImagen, descripcion } = props.datos;

    return <div>
        <Link to={`/videos/${id}`} key={id} >
            <StyledDivContent >
                <h3 >{titulo}</h3>
                <StyledImagenes src={linkImagen} alt='Imagen del video' />
                <p >{descripcion}</p>
            </StyledDivContent>
        </Link>

    </div>
}

export default PostArrys;