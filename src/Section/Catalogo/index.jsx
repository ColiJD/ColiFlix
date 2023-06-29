import { useState, useEffect } from 'react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { StyledCatalogo,  responsive} from './StyledCatalogo';
import { buscar } from '../../api/api';
import Indice from '../../componentes/Indice';
import PostArrys from '../../componentes/Posts';


const Catalogo = (props) => {
    const [posts, setPosts] = useState([])
    const { nombre } = props.datosCate

    useEffect(() => {
        buscar("/videos", setPosts)
    }, [])
    return (
        <StyledCatalogo>
            <Indice nombre={nombre} />
            <Carousel responsive={responsive}  >
                {
                    posts.map(post => {
                        return <PostArrys datosPost={post} key={post.id}/>
                    })}
            </Carousel>

        </StyledCatalogo>
    )
};


export default Catalogo
