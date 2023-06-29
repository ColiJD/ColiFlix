import React from "react"
import {CampoStyled, LabelStyled,TextAreaStyled} from "../../assets/base"


const TextoArea = (props) => {
    const { type = 'text', placeholder, requiered, valor, setValor} = props
    const placehlderModificador = `${placeholder}`

    const manejarCambio = (e) => {
        setValor(e.target.value)
    }
    return <CampoStyled className="campoText">
    <LabelStyled>{props.titulo}</LabelStyled>
        <TextAreaStyled 
            placeholder={placehlderModificador}
            requiered={requiered}
            value={valor}
            onChange={manejarCambio}
            type={type} >
        </TextAreaStyled>
    </CampoStyled>
}

export default TextoArea