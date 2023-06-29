import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"
import { Button } from "../assets/base"


const Post = ({ url }) => {

    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        buscar(`/videos/${id}`, setPost).catch(() => {
            navigate("/not-found")
        })
    }, [id,navigate])


    return (
        <main >
            <article >
                <h2 >{post.titulo}</h2>
                <img src={post.linkImage} alt="Imagen" />
                <h4>{post.categoria}</h4>
                <p >{post.descripcion}</p>
            </article>
            <Link to="/">
                <Button>Regresar</Button>
            </Link>
        </main>
    )
}

export default Post