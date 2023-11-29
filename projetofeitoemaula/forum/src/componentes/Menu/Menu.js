import { useLocation, useNavigate } from "react-router-dom"
import { ButtonMenu, InputSearch, MenuStyle } from "./style"
import { useContext,  useState} from "react"
import { GlobalStateContect } from "../../GlobalState/GlobalStateContext"


function Menu() {

    const navigate = useNavigate()
    const {selectedPostId, setSelectedPostId} = useContext(GlobalStateContect)
    const [activeButton, setActiveButton] = useState(false);
    const location = useLocation();

  
    
    return (
        <>

        <MenuStyle>

            <InputSearch type="text"
                placeholder="Filtrar por título"
                value={selectedPostId}
                onChange={(e) => setSelectedPostId(e.target.value)} />
       
            <h3>Menu</h3>
            <ButtonMenu active={location.pathname === '/'} color="red" onClick={() => navigate('/')}>Feed</ButtonMenu>
            <ButtonMenu  active={location.pathname === '/criarPost'} color="yellow" onClick={() => navigate('/criarPost')}>Postar</ButtonMenu>
            <ButtonMenu  active={location.pathname === '/perfil'} color="yellow" onClick={() => navigate('/perfil')}>Perfil</ButtonMenu>


        </MenuStyle>
        </>
    )
}

export default Menu