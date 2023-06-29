import { useState, useEffect } from 'react';
import GlobalStyle from '../assets/base/GlobalStyle';
import Header from '../Section/Header';
import Banner from '../Section/Banner';
import Formulario from '../Section/Formulario';
import Footer from '../Section/Footer';
import Catalogo from '../Section/Catalogo';
import { buscar } from '../api/api';




function Home() {
    const [mostrarFormulario, actualizarMostrar] = useState(false);
    const [categories, setCategories] = useState([]);


    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario);
    }

    useEffect(() => {
        buscar(`/categorias`, setCategories)
    }, [])

    // const registrarPosts = (post) => {
    //     //Spread operator //Esto crea una copia los tres puntos
    //     actualizarPosts([...posts, post])
    // }
    return (
        <>
            <GlobalStyle />
            <div>
                <Header cambiarMostrar={cambiarMostrar} />
                {mostrarFormulario === true ? <Formulario /> : <></>}
                <Banner />
                <main>
                    {categories.map((categoria) => {
                        return <Catalogo datosCate={categoria} key={categoria.id}
                        />
                    })}
                </main>
                <Footer />
            </div>
        </>

    );
}

export default Home;