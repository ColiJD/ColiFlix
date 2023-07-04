import React from 'react';
import styled from 'styled-components';


export const StyleCategorias = styled.ul`
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-color: #000;

`
export const StyledLista = styled.li`
    padding: 0.75rem;
    background-color: #0071ea;
    color: #fff;
    margin: 0.5rem;
    border: solid 1px ;
    border-radius: 7px;
    transition: all 0.5s ease-in-out;
    list-style: none;
    text-decoration: none;
    &:hover {
        color: #FFE121;
    }
    
`

const Indice = (props) => {
    const { nombre } = props
    return (
        <StyleCategorias >
            <StyledLista >
                {nombre}
            </StyledLista>
        </StyleCategorias>
    )
}

export default Indice