import styled from "styled-components";
import { primary,font_family_logo,blanco } from "./Variables";

export const Button = styled.button`
    background-color: #000;
    font-weight: 700;
    font-family: ${font_family_logo};
    padding: 8px 24px;
    border: none;
    color: ${blanco};
    cursor: pointer;
    border: solid 1px #fff;

    &:hover {
    background-color: ${primary};
    color: ${blanco};
    }
`
export const StyledNombre = styled.h1`
    font-size: 25px;
    color: ${primary};
    font-weight: bold;
`

export const TitulosPrincipales = styled.h2`
    padding-top: 25px;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    color: ${blanco};

    @media screen and (max-width:480px){
        font-size: 20px;
    
}
`

/*Componentes Para formulario*/
export const CampoStyled = styled.div`
    margin: 24px 0;
`
export const LabelStyled = styled.label`
    font-weight: 600;
    font-size: 18px;
    display: block;
    margin-bottom: 8px;
`
export const InputStyled = styled.input`
width: 100%;
background-color: #53585D;
border: none;
padding: 10px 20px;
outline-color: #6278F7;
font-size: 16px;
box-sizing: border-box;

&::placeholder{
    color: ${blanco};
}
`
export const TextAreaStyled = styled.textarea`
    font-family: "Roboto";
    width: 100%;
    height: 150px;
    background-color: #53585D;
    border: none;
    padding: 10px 20px;
    outline-color: #6278F7;
    font-size: 16px;
    box-sizing: border-box;
    color: ${blanco};

&::placeholder{
    color: ${blanco};
}
`
export const ListaStyled = styled.select`
    width: 100%;
    background-color: #53585D;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    padding: 10px 20px;;
    border: none;
    font-size: 16px;
    color: ${blanco};

    &:hover{
        outline-color: #6278F7 ;
    }
`
