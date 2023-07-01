
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { StyledCatalogo, responsive } from './StyledCategoria';
import Indice from '../../componentes/Indice';
import PostArrys from '../../componentes/Posts';


const Categoria = (props) => {
  const { nombre } = props.datosCate
  const { FiltarPosts } = props
  return <>{FiltarPosts.length > 0 &&
    <StyledCatalogo>
      <Indice nombre={nombre} />
      <Carousel responsive={responsive}  >
        {
          FiltarPosts.map((post, index) => <PostArrys
            datos={post}
            key={index}
          />)
        }
      </Carousel>
    </StyledCatalogo>}
  </>
};


export default Categoria
