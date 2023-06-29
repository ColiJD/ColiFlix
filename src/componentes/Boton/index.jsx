import React from "react";
import { Button } from "../../assets/base";

const Boton = (props) => {
    const { texto, colorSecundario, colorPrimario, font, fontWeight, family,cambiarMostrar, margen } = props

    return <Button onClick={cambiarMostrar}
        style={{
            background: colorSecundario, color: colorPrimario, fontSize: font, fontWeight: fontWeight,
            fontFamily: family, margin: margen
        }}>{texto}</Button>
}

export default Boton;