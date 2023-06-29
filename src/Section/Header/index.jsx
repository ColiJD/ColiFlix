
import React from "react";
import styled from "styled-components";
//import { Button } from "../../assets/base";
import { primary } from "../../assets/base/Variables";
import Boton from "../../componentes/Boton";
import {StyledNombre } from "../../assets/base";

/*const ButtonHeader = styled(Button)`
    background-color: #000;
    color: ${blanco};
`*/

const StyledHeader = styled.header`
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 2rem;
    border-bottom: 2px solid ${primary};
`


const Header = (props) => {
    return (<StyledHeader>
        <StyledNombre className='header-nombre'>JDFLIX</StyledNombre>
        <Boton  cambiarMostrar={props.cambiarMostrar} texto="Nuevo Video" >Nuevo Video</Boton>
    </StyledHeader>
    )
}

export default Header 