import { useEffect, useRef } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

function FormLogin() {

    function handleLogin(event) {
        event.preventDefault();

        //Local storage
        // localStorage.setItem("email", event.target.email.value);
        // localStorage.setItem("password", event.target.password.value);

        //Menampilan nilai
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        // console.log("login");

        //Redirect ke product
        // window.location.href = "/products";

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        login(data);
    }

    const usernameRef = useRef(null);

    useEffect(function () {
        usernameRef.current.focus(); //current untuk mengeset value
    }, [])

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label='Username'
                name='username'
                type='text'
                placeholder='enter your username'
                ref={usernameRef}
            />
            <InputForm
                label='Password'
                name='password'
                type='password'
                placeholder='*********'
            />
            <Button variant='bg-blue-500 w-full' text='login' type="submit"></Button>
        </form>
    );
}

export default FormLogin;