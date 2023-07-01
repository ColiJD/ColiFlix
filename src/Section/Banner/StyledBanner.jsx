import styled from 'styled-components';
import ImagenBanner from '../../assets/cine.jpg';
import { blanco_titulos } from '../../assets/base/Variables';


const StyleBanner = styled.section`
    display: flex;
    background: url(${ImagenBanner}) no-repeat center;
    background-size: cover;
    justify-content: space-evenly;
    padding: 155px 2rem 2rem 2rem;

    @media screen and (max-width:480px){
      flex-direction: column;
      justify-content: center;
      padding: 20px 2rem;
      text-align: justify;
    }
`
const StyleContainer = styled.div`
    width: 50%;
    background-color: transparent;

    @media screen and (max-width:480px){
      width: 100%;
    }

`
const StyledTitulo = styled.h1`
    padding-top: 0.5rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 54px;
    color: ${blanco_titulos};
    background-color: transparent;

    @media screen and (max-width:480px){
      font-size: 32px;
    }
    
`
const StyledParrafo = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 21px;
    color: ${blanco_titulos};
    background-color: transparent;

    @media screen and (max-width:480px){
      font-size: 14px;

    }
`

const StyledVideo = styled.video`
    width: 40%;
    opacity: 0.8;
    border: 2px solid #6BD1FF;
    border-radius: 4px;

    @media screen and (max-width:480px){
      display: none;
    }
`
export {StyledParrafo, StyleBanner, StyleContainer, StyledTitulo,StyledVideo}