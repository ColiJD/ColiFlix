import GlobalStyle from "../assets/base/GlobalStyle"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"
import { Button } from "../assets/base"
import styled from "styled-components"
import { primary,blanco } from "../assets/base/Variables"

const StyledMain = styled.main`
  background-color: #000;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0 1.5rem 0rem;
  background-color: ${primary};
  padding: 0.75rem 0;

  @media screen and (max-width:280px){
      flex-direction: column;
    }
`
const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  display: block;
  background-color: transparent;
`
const StyledVideo = styled.video`
  height: 414px;
  border-radius: 2rem;

    @media screen and (max-width:768px){
        height: 340px;
    }

    @media screen and (max-width:480px){
        height: 210px;
    }

    @media screen and (max-width:280px){
        height: 120px;
    }


`
const StyledDescription = styled.p`
  margin: 0 150px;
  font-size: 18px;
  font-style: italic;

    @media screen and (min-width:1280px){
      margin: 20px 260px 0 260px;
    }

  @media screen and (max-width:768px){
      margin: 20px 80px 0 80px;
      font-size: 14px;
    }

    @media screen and (max-width:480px){
      margin: 5px 40px 0 40px;
    }

    @media screen and (max-width:280px){
      margin: 5px 40px 0 40px;
      font-size: 12px;
    }
`
const StyledBoton = styled(Button)`
  background-color: ${blanco};
    color: ${primary};

`

const Post = () => {

  const [post, setPost] = useState({})
  const { titulo,descripcion, linkVideo } = post
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    buscar(`https://json-server-361u.onrender.com/videos/${id}`, setPost).catch(() => {
      navigate("/not-found")
    })
  }, [id, navigate])


  return (<>
    <GlobalStyle />
    <StyledMain >
      <article>
        <StyledDiv>
          <StyledTitle >{titulo}</StyledTitle>
          <Link to="/">
            <StyledBoton>Regresar</StyledBoton>
          </Link>
        </StyledDiv>
        <StyledVideo controls src={linkVideo} alt="Imagen" /> 
        <StyledDescription >{descripcion}</StyledDescription>
      </article>
    </StyledMain>
  </>
  )
}

export default Post