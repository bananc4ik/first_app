import react from "react";
import { fetchAuth } from "../app/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AuthStyles from "../styles/Auth.css"
import backToHomeImage from '../images/Auth/backToHome.png';
import { useNavigate } from "react-router-dom";

const Auth = () => {

    const dispatch = useDispatch();

    const AuthFromApi = useSelector((state) => state.auth.authList);

    useEffect(() => {
        dispatch(fetchAuth());
    }, [dispatch])

    useEffect(() => {
        console.log(AuthFromApi);

    }, [AuthFromApi])

    const [inputEmail, setInputEmail] = useState('');

    const [inputPassword, setInputPassword] = useState('');

    const navigate = useNavigate();
    // localStorage.removeItem("user_token")


    const AuthFunction = () => {

        const errorBox = document.getElementById("error_box");

        if (inputEmail && inputPassword != null) {
            const user = AuthFromApi.users.filter(user => user.email == inputEmail);

            if (user[0] == null) {
                errorBox.style.visibility = "visible";

            } else {

                if (user[0].password == inputPassword) {

                    alert("banan337");
                    errorBox.style.visibility = "hidden";

                    localStorage.setItem("user_token",user[0].token);
                    navigate("/");


                } else {
                    errorBox.style.visibility = "visible";

                }

            }



        }




    }











    return (

        <div className="container-fluid">


            <div className="d-flex justify-content-center  row">



                <div className="col-12 d-flex justify-content-center">
                    <h1 className="authorization_title">Authorization</h1>



                </div>

                <div className="col-md-7 col-9 d-flex flex-column justify-content-center align-items-center auth_container">


                    <form className="col-md-9 col-11 d-flex flex-column" action="">
                        <label className="auth_label" htmlFor="emailinput">Email:</label>
                        <input className="auth_input" id="emailinput" onChange={(event) => setInputEmail(event.target.value)} placeholder="Write your email" type="email" />

                        <label className="auth_label" htmlFor="NameInput">Name:</label>
                        <input className="auth_input" id="NameInput" placeholder="Write your name" type="text" />

                        <label className="auth_label" htmlFor="PasswordInput">Password:</label>
                        <input onChange={(event) => setInputPassword(event.target.value)} className="auth_input" id="PasswordInput" placeholder="Write your password" type="text" />
                    </form>


                    <div id="error_box" className="password_error">

                        <p>Your login or password is not correct!</p>

                    </div>



                    <div className="col-12 d-flex justify-content-center ">
                        <button onClick={AuthFunction} className="text-center col-md-3 col-8 login_button">Login</button>
                    </div>









                </div>








            </div>



        </div>


    )

}

export default Auth