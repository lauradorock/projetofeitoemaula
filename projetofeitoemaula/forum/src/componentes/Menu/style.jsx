import styled from "styled-components";


export const MenuStyle = styled.aside`
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    box-shadow: 0px 2px 3px black;
    width: 30vh;
    grid-column: 1/1;
    grid-row: 1/2;
    padding: 10px;
    gap: 2px;
`

export const InputSearch = styled.input`
    height: 3vh;
    border-radius: 4px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    padding: 5px;
    box-shadow: 0px 1px 3px black;
`

export const ButtonMenu = styled.button`
    height: 5vh;
    padding: 5px;
    box-shadow: 0px 2px 3px black;
    border: none;
    color: ${(props) => (props.active ? 'white' : 'orange')};
    border-radius: 4px;
    background-color: ${(props) => (props.active ? 'orange' : '#fafafa')};
`