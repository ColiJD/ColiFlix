import './Catalogo.css';
import Videos from "../../componentes/VideosAdd";
import Boton from '../../componentes/Boton';

const Catalogo = (prosp) => {
    const { titulo, colorPrimario } = prosp.datos;

    return (
        <section className="catalogo">
            <Boton texto={titulo} colorPrimario="#000" colorSecundario={colorPrimario} font="24px" margen="0.75rem 0 0 0" />
            <div className="videoAdd">
                <Videos />

            </div>
        </section>
    )
};

export default Catalogo