import styled from 'styled-components'

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6vh;
    box-shadow: 0px 0.1px 5px black;
    padding: 10px;
`

export const ButtonRegister = styled.button`
    background-color: #F48023;
    color: #fff;
    font-weight: 600;
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 8vw;
    `
export const TituloHeader = styled.h3`
     font-weight: 500;
`
export const ButtonLogin = styled.button`
    background-color: #EAEAEA;
    color: #1682FD;
    font-weight: 600;
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 6vw;
    margin: 0 10px 0 20px;
    `

export const ContainerButton = styled.div`
    display: flex;
    /* border: 1px solid black; */
    gap: 1vw;
    /* width: 18vw; */
    align-items: center;
    justify-content: space-between;
    margin-right:5vw;
`

export const ButtonAsk = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color:  #F48023;
    color: #fff;
    width: 9vw;
    font-weight: 400;

`

export const ImgIcone = styled.img`
    /* width: 20px; */
    height: 3vh;
    `

export const ImgPerfil = styled.img`
    height: 7vh;
    border-radius: 50%;
`

export const Trocar = styled.ul`
    display: flex;
    flex-direction: column;
    height: 10vh;
    /* padding: 8vh 0 0 2vh; */
    /* margin-right:20px; */
    width: 1vw;
    list-style: none;
    position: absolute;
    margin-top:10vh;
    margin-left: 13vw;
    `

export const PrimeiroButton = styled.li`
    width: 1vw;
    align-self: flex-end;
    border: none;
    background-color: none;
   
    `

export const ButtonLista = styled.li`
    background-color: #F48023;
    width: 4vw;
    padding: 0.1vw;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    margin-bottom: 2px;
    color: white;
    
    &:hover{
        /* box-shadow: 1px 1px 3px #F48023; */
        /* color: #f48023; */
        background-color: gray;
    }
`

