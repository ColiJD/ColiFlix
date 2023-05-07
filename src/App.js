import { useState } from 'react';
import './assets/base/base.css';
import Header from './Section/Header';
import Banner from './Section/Banner';
import Formulario from './Section/Formulario';
import Footer from './Section/Footer';
import Catalogo from './Section/Catalogo';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  const categorias = [
    {
      titulo: "Anime",
      colorPrimario: "#82CFFA",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Doramas",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Peliculas",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Series",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "Videos Musicales",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Otras",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
  ]
  return (
    <div className="App">
      <Header cambiarMostrar={cambiarMostrar} />
      {mostrarFormulario === true ? <Formulario /> : <></>}
      <Banner />
      {categorias.map((categoria) => {
        return <Catalogo datos={categoria} key={categoria.titulo} />
      })
      }
      <Footer />
    </div>
  );
}

export default App;
