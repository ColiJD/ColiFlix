import styled from "styled-components";
import { blanco } from "../../assets/base/Variables";
import {Button } from "../../assets/base";

const StyledFormulario = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap:  wrap;
    gap: 20px;
    color: ${blanco};
    background-color: #000;

    @media screen and (max-width:480px){
        margin: 0 2rem;
        flex-direction: column;
    }
`
const StyledForm = styled.form`
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 25%);
    border-radius: 20px;
    padding: 8px 2rem;
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

export { StyDivBotones, StyledBoton, StyledForm, StyledDiv, StyledFormulario }