
import React from 'react';
import styled from 'styled-components';
import ImagenBanner from '../../assets/cine.jpg';
import { blanco_titulos } from '../../assets/base/Variables';

const StyleBanner = styled.section`
    display: flex;
    background: url(${ImagenBanner}) no-repeat center;
    background-size: cover;
    justify-content: space-evenly;
    padding: 155px 2rem 2rem 2rem;
`
const StyleContainer = styled.div`
    width: 50%;
`

const StyledTitulo = styled.h1`
    padding-top: 0.5rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 54px;
    color: ${blanco_titulos};
`
const StyledParrafo = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 21px;
    color: ${blanco_titulos};
`

const StyledVideo = styled.video`
    width: 40%;
    opacity: 0.8;
    border: 2px solid #6BD1FF;
    border-radius: 4px;
`
const Banner = () => {
    return (
        <StyleBanner>
            <StyleContainer>
                <StyledTitulo className='banner-titulo'>Challenge React</StyledTitulo>
                <StyledParrafo className='banner-parrafo'>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</StyledParrafo>
            </StyleContainer>
            <StyledVideo className='banner-video'>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
            </StyledVideo>
        </StyleBanner>
    )
}

export default Banner