import React from "react";
import {ListaStyled} from "../../assets/base/index"

const ListaCampo = (props) => {

    const categoria = [
        "Anime",
        "Doramas",
        "Peliculas",
        "Series",
        "Videos Musicales",
        "Otras"
    ]

    const manejarCambios = (e) => {
        props.setValor(e.target.value)
    }
    return <div className="ListaCampo">
        {/*<LabelStyled>Catalogo</LabelStyled>*/}
        <ListaStyled value={props.valor} onChange={manejarCambios} >
            <option value="" disabled defaultValue="" hidden>Categoria</option>
            {categoria.map((categoria, index) => {
                return <option key={index} value={categoria}>{categoria}</option>
            })}
        </ListaStyled>
    </div>
};

export default ListaCampo;