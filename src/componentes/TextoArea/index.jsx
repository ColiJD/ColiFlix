import "./TextoArea.css";

const TextoArea = (props) => {
    const { type = 'text', placeholder, requiered, valor, setValor} = props
    const placehlderModificador = `${placeholder}`

    const manejarCambio = (e) => {
        setValor(e.target.value)
    }
    return <div className="campoText">
    <label>{props.titulo}</label>
        <textarea 
            placeholder={placehlderModificador}
            requiered={requiered}
            value={valor}
            onChange={manejarCambio}
            type={type} >
        </textarea>
    </div>
}

export default TextoArea