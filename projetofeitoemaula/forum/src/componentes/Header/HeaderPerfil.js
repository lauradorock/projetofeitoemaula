import { useEffect, useState } from 'react';
import logo from '../../assets/Logo.png'
import { ButtonAsk, ButtonLista, ContainerButton, HeaderStyle, ImagemSeta, ImgIcone, ImgPerfil, PrimeiroButton, Select, TituloHeader, Trocar } from './style'
import { useNavigate } from "react-router-dom";
import icone from "../../assets/notification.png"
import seta from "../../assets/caret.png"

function HeaderPerfil(props) {

    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email'); // Você pode remover outras informações do usuário se necessário
        navigate('/login'); // Redirecionar para a página de login após o logout
    }



    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirecionar para a página de login se não houver token
        }
    }, [navigate]);


    return (
        <HeaderStyle>
            <img src={logo} alt='logo alem help' />
            <TituloHeader>{props.titulo}</TituloHeader>
            <ContainerButton>
                <ButtonAsk onClick={() => navigate('/criarPost')}>Ask a questions</ButtonAsk>
                <ImgIcone src={icone} />
                <ImgPerfil src='https://github.com/PaulaRabelo.png' />

                <Trocar>
                    <PrimeiroButton onClick={() => setShowMenu(!showMenu)}> <img src={seta} /> </PrimeiroButton>

                    {showMenu && (
                        <>
                            <ButtonLista onClick={() => { navigate('/editarPerfil') }}>Editar</ButtonLista>
                            <ButtonLista onClick={handleLogout}>Logout</ButtonLista>
                        </>
                    )}
                </Trocar>
            </ContainerButton>
        </HeaderStyle>
    )
}

export default HeaderPerfil