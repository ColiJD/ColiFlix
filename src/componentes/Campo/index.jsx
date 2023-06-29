import React from "react"
import {CampoStyled, LabelStyled, InputStyled} from "../../assets/base/index"


const Campo = (props) => {
    const placehlderModificado = `${props.placeholder}` /*Puede ser util para modificar los props sin hacer cambios en muchos lados*/

    //Destructuracion 
    const { type = 'text' } = props

    const manejarCambio = (e) => {
        props.setValor(e.target.value)

    }

    return <CampoStyled className={`campo-${type}`}>
        <LabelStyled>{props.titulo}</LabelStyled>
        <InputStyled
            placeholder={placehlderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </CampoStyled>
}

export default Campo;
