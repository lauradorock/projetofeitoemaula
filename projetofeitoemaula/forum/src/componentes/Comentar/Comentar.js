import { useEffect, useState } from "react";
import { createComment } from "../../services/requests";
import { AutorComentario, BotaoCondicional, ComentarioContainer, ComentarioDoAutor, ContainerCurtir, ContainerItem, InputComentar } from "./style";
import Curtir from "../Curtir/Curtir";


const Comentar = ({ postId, comments, autorId }) => {

    const [novoComentario, setNovoComentario] = useState('')
    const [comentarios, setNovoComentarios] = useState([])
    const [mostrarComentarios, setMostrarComentarios] = useState(false)

    const adicionarComentario = () => {
        if (novoComentario.trim() !== '') {
            createComment(postId, novoComentario)
            setNovoComentarios(...comments, novoComentario)
            setNovoComentario('')
        }
    }

    useEffect(() => {
        adicionarComentario()
    }, [])

    const NovosComentarios = comments.map((comentario) => {
        return (
            <ComentarioContainer key={comentario.comment_id}>
                <AutorComentario>{comentario.creator_name}</AutorComentario>
                <ComentarioDoAutor>{comentario.comment}</ComentarioDoAutor>
            </ComentarioContainer>
        )
    })
    return (

        <>
            <ContainerItem>
                <BotaoCondicional onClick={() => setMostrarComentarios(
                    !mostrarComentarios)}>{mostrarComentarios ? ('Fechar') :
                        ('Comentar')}
                </BotaoCondicional>
                {mostrarComentarios && (
                    <ContainerCurtir>
                        <div>
                            <InputComentar
                                placeholder="Comentario"
                                value={novoComentario} 
                                onChange={(e) => setNovoComentario(e.target.value)}/>
                        </div>
                        {NovosComentarios}
                    </ContainerCurtir>
                )}
                <Curtir autorId={autorId} />
            </ContainerItem>




        </>
    )
}

export default Comentar