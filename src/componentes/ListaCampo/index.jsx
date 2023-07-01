import React from 'react';
import { ListaStyled } from "../../assets/base/index";


const ListaCampo = (props) => {
  const { categories } = props;


  const manejarCambios = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className="ListaCampo">
      <ListaStyled value={props.valor} onChange={manejarCambios}>
        <option value="" disabled defaultValue="" hidden>
          Categoria
        </option>
        {categories.map((categoria, index) => (
          <option key={index} value={categoria.nombre}>
            {categoria.nombre}
          </option>
        ))}
      </ListaStyled>
    </div>
  );
};

export default ListaCampo;
