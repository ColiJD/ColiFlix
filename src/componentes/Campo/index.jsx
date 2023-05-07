import "./Campo.css"

const Campo = (props) => {
    const placehlderModificado = `${props.placeholder}` /*Puede ser util para modificar los props sin hacer cambios en muchos lados*/

    //Destructuracion 
    const { type = 'text' } = props

    const manejarCambio = (e) => {
        props.setValor(e.target.value)

    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placehlderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;
