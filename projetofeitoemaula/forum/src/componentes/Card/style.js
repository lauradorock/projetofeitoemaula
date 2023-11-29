import styled from "styled-components";


export const ContainerCardHome = styled.div`
    width: 60vw;
    padding:6vw;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 40px;
    height: 100%;
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    min-height: 70vh;
`
export const CardStyle = styled.div`
    border-radius: 5px;
    box-shadow: 2px 1px 5px black;
    height: 60vh;
    gap: 5px;
    padding: 15px;
    margin: 0;
   
`
// -------------------------------------------
export const PerfilUsuario = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    
`
export const ContainerPerfil = styled.div`
    display: flex;
    flex-direction: column;
`

// --------------------------------

export const ImgCard = styled.img`
    box-shadow: 1px 0.5px 3px black;
    border-radius: 50%;
    width: 3vw;
    height: 6.5vh;
`
 
export const NomeCard = styled.h3`
    font-weight: 400;
    margin: 0;
    font-size: 16px;
`

export const MensagemCard = styled.p`
    margin: 0;
    display: flex;
    order: 5 ;
    `

// ------------------------------------

export const TituloCard = styled.h3`
    margin: 0;
    margin: 10px 0 10px 0;
`


export const CardPost = styled.div`
    box-shadow: 1px 1px 4px black;
    border-radius: 5px;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 5px;
`
export const ImgPost = styled.img`   
    height: 5vw;

`

export const ConteudoCard = styled.p`
    text-align: justify;
    margin: 0;
`


export const ContainerTag = styled.div`
    display: flex;
    grid-column: 1/3;
    grid-row: 5/5;
    height: 100%;
    gap: 15px;
   `

export const ButtonCard = styled.button`
    background-color: orange;
    border: none;
    border-radius: 5px;
    height: 4.5vh;
    color: white;
    font-weight: 600;
`

export const EditPost = styled.div`
    margin: 10px 0 ;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    `

