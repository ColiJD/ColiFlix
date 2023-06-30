import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"
import { Button } from "../assets/base"
import styled from "styled-components"
import GlobalStyle from "../assets/base/GlobalStyle"



const StyledMain = styled.main`
  background-color: #000;
  color: white;
  display: grid;
  place-items: center;
  text-align: center;
  position: relative;
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 1.5rem 0;
  padding: 0 2rem;
`
const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  display: block;
`
const StyledVideo = styled.img`
  height: 414px;
  border-radius: 2rem;
`
const StyledDescription = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-style: italic;
`

const Post = () => {

  const [post, setPost] = useState({})
  const { titulo, linkImagen, descripcion } = post
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    buscar(`/videos/${id}`, setPost).catch(() => {
      navigate("/not-found")
    })
  }, [id, navigate])


  return (<>
    <GlobalStyle />
    <StyledMain >
      <div className="ono"/>
      <article>
        <StyledDiv>
          <StyledTitle >{titulo}</StyledTitle>
          <Link to="/">
            <Button>Regresar</Button>
          </Link>
        </StyledDiv>
        <StyledVideo src={linkImagen} alt="Imagen" />
        <StyledDescription >{descripcion}</StyledDescription>
      </article>


    </StyledMain>
  </>
  )
}

export default Post