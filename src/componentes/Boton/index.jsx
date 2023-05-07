import "./Boton.css";


const Boton = (props) => {
    const { texto, colorSecundario, colorPrimario, font, fontWeight, family,cambiarMostrar, margen } = props

    return <button className="boton" onClick={cambiarMostrar}
        style={{
            background: colorSecundario, color: colorPrimario, fontSize: font, fontWeight: fontWeight,
            fontFamily: family, margin: margen
        }}>{texto}</button>
}

export default Boton;