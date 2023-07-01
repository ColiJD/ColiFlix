
import React from 'react';
import { StyledParrafo, StyleBanner, StyleContainer, StyledTitulo, StyledVideo } from './StyledBanner';

const Banner = () => {
  return (
    <StyleBanner>
      <StyleContainer>
        <StyledTitulo className='banner-titulo'>Bienvenido(a)</StyledTitulo>
        <StyledParrafo className='banner-parrafo'>JDFLIX es una plataforma de transmisión de videos, Su interfaz intuitiva permite una navegación fácil. Disfruta de entretenimiento visual conveniente y envolvente en JDFLIX.</StyledParrafo>
      </StyleContainer>
      <StyledVideo muted loop autoPlay controls src='https://firebasestorage.googleapis.com/v0/b/react-firebase-9385b.appspot.com/o/59478288-1ca4-498c-a0b2-9d1a8a6471c1?alt=media&token=72cd914e-e733-4789-9167-66ae6268ea46'>
      </StyledVideo>
    </StyleBanner>
  )
}

export default Banner