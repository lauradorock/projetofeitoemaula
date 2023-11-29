import React from 'react';
import Header from "../../componentes/Header/Header"
import loginImagem from '../../assets/imagemLogin.png'
import { ButtonStyle, ContainerDiv, FormStyle, ImagemStyle, InputStyle, PStyle, SectionStyle } from './style';
import { useData } from '../../hooks/useData';
import { useTokenNotNull } from '../../hooks/usetokenNotNull';


function Login() {
    const {form, onChangeForm, handleSubmit, message} = useData({username:'', password:''},'/user/login');

    useTokenNotNull()

    return (
        <>
            <Header
                titulo={"login"}
            />

            <SectionStyle>
                <ContainerDiv>
                    <h2>We’ve Missed You!</h2>
                    <PStyle>More than 150 questions are waiting for your wise suggestions!</PStyle>

                    <FormStyle onSubmit={handleSubmit}>

                

                        <InputStyle
                            placeholder='Nome'
                            type="text"
                            name='username'
                            value={form.username}
                            onChange={onChangeForm} />

                        <InputStyle
                            placeholder='Senha'
                            type="password"
                            name='password'
                            value={form.password}
                            onChange={onChangeForm} />
                            
                        {message &&  <p>{message} </p>}

                        <ButtonStyle type="submit">Entrar</ButtonStyle>

                    </FormStyle>

                </ContainerDiv>
                <ImagemStyle src={loginImagem} alt='' />


            </SectionStyle>

        </>
    )
}

export default Login





