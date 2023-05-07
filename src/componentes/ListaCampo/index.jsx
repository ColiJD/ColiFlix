import "./ListaCampo.css"

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
    return <section className="ListaCampo">
        {/*<label>Catalogo</label>*/}
        <select value={props.valor} onChange={manejarCambios} >
            <option value="" disabled defaultValue="" hidden>Categoria</option>
            {categoria.map((categoria, index) => {
                return <option key={index} value={categoria}>{categoria}</option>
            })}
        </select>
    </section>
};

export default ListaCampo;