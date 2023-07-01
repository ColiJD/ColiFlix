import { useState, useEffect } from 'react';
import GlobalStyle from '../assets/base/GlobalStyle';
import Header from '../Section/Header';
import Banner from '../Section/Banner';
import Formulario from '../Section/Formulario';
import Footer from '../Section/Footer';
import Categoria from '../Section/Categoria';
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

  return (
    <>
      <GlobalStyle />
      <>
        <Header cambiarMostrar={cambiarMostrar} />
        {mostrarFormulario === true ? <Formulario setPosts={setPosts} setCategories={setCategories} categories={categories} /> : <></>}
        <Banner />
        <main>
          {categories.map((categoria) => {
            return (
              <Categoria
                datosCate={categoria}
                key={categoria.id}
                FiltarPosts={posts.map((post) => {
                  const id = post.id;
                  const titulo = post.titulo;
                  const linkVideo = post.linkVideo;
                  const linkImagen = post.linkImagen;
                  const categorias = post.categorias;
                  const descripcion = post.descripcion;
                  return { id, titulo, linkVideo, linkImagen, categorias, descripcion };
                }).filter((post) => { return post.categorias === categoria.id; })}
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