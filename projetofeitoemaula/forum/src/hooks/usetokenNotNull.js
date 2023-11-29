import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const useTokenNotNull = () =>{

    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token'); 
        // const token = window.localStorage.getItem('token'); 
        if(token !== null){
            navigate('/')
        }
    },[])
}