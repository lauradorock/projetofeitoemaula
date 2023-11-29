import styled from "styled-components";

export const ComentarioContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const AutorComentario = styled.p`
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
`

export const ComentarioDoAutor = styled.p`
    font-size: 12px;
    font-weight:200;
`

export const ContainerCurtir = styled.div`
    display: flex;
    flex-direction: column;
   
`
export const ContainerItem = styled.div`
    display: flex;
    gap: 6px;
  /* border: 1px solid black; */
  width: 45vw;
  justify-content: end;
`
export const InputComentar = styled.input`
    width: 30vw;
    height: 5vh;
`

export const BotaoCondicional = styled.button`
    width: 6vw;
    height: 5vh;
`