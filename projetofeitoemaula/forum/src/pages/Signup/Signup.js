import React from 'react';
import cadastroImagem from '../../assets/img-create.png'
import { ButtonStyle, ContainerDiv, FormStyle, ImagemStyle, InputStyle, PStyle, SectionStyle } from '../Login/style';
import Header from '../../componentes/Header/Header';
import { useData } from '../../hooks/useData';
import { useTokenNotNull} from '../../hooks/usetokenNotNull';

function SignUp() {
    
    
    const {form, onChangeForm, handleSubmit, message} = useData({username:'', password:'', email:''},'/user/signup');

    useTokenNotNull()

    return (
        <>

        <Header/>

            <SectionStyle>
                <ContainerDiv>
                    <h2>Join Alem community</h2>
                    <PStyle>Get more features and priviliges by joining to the most helpful community</PStyle>

                    <FormStyle onSubmit={handleSubmit}>

                        <InputStyle
                            placeholder='Nome'
                            type="text"
                            name='username'
                            value={form.username}
                            onChange={onChangeForm}
                        />

                        <InputStyle
                            placeholder='E-mail'
                            name='email'
                            type="email"
                            value={form.email}
                            onChange={onChangeForm} />

                        <InputStyle
                            placeholder='Senha'
                            name='password'
                            type="password"
                            value={form.password}
                            onChange={onChangeForm} />
                        {message &&  <p>{message} </p>}
                        <ButtonStyle type="submit">Entrar</ButtonStyle>
                    </FormStyle>



                </ContainerDiv>
                <ImagemStyle src={cadastroImagem} alt='' />


            </SectionStyle>



        </>
    )
}

export default SignUp