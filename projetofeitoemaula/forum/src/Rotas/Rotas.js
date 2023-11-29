import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from "../pages/Signup/Signup"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
              
                <Route index element={<Home/>}/>
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<SignUp/>}/>
            
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas