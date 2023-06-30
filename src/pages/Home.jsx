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
  const [posts, setPosts] = useState([])


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  useEffect(() => {
    buscar(`/categorias`, setCategories)
  }, [])
  useEffect(() => {
    buscar("/videos", setPosts)
  }, [])
  // const registrarPosts = (post) => {
  //     //Spread operator //Esto crea una copia los tres puntos
  //     actualizarPosts([...posts, post])
  // }
  return (
    <>
      <GlobalStyle />
      <>
        <Header cambiarMostrar={cambiarMostrar} />
        {mostrarFormulario === true ? <Formulario /> : <></>}
        <Banner />
        <main>
          {categories.map((categoria) => {
            return (
              <Catalogo
                datosCate={categoria}
                key={categoria.id}
                FiltarPosts={posts
                  .map((post) => {
                    const id = post.id;
                    const titulo = post.titulo;
                    const linkVideo = post.linkVideo;
                    const linkImagen = post.linkImagen;
                    const categorias = post.categorias;
                    const descripcion = post.descripcion;
                    return { id, titulo, linkVideo, linkImagen, categorias, descripcion };
                  })
                  .filter((post) => {
                    return post.categorias === categoria.id;
                  })}
              />
            );
          })}
        </main>
        <Footer />
      </>
    </>

  );
}

export default Home;