import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";

function FormLogin() {

    function handleLogin(event) {
        event.preventDefault();

        //Local storage
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);

        //Menampilan nilai
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log("login");

        //Redirect ke product
        window.location.href = "/products";
    }

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label='Email'
                name='email'
                type='email'
                placeholder='example@gmail.com'
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