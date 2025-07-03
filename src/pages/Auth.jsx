import react from "react";
import { fetchAuth } from "../app/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Auth = () => {

    const dispatch = useDispatch();

    const AuthFromApi = useSelector((state) => state.auth.authList);

    useEffect(()=>{
        dispatch(fetchAuth());
    },[dispatch])

    useEffect(() =>{
        console.log(AuthFromApi);
        
    },[AuthFromApi])

    

    return(

        <div>
            <p>yystuikud</p>



        </div>


    )

}

export default Auth