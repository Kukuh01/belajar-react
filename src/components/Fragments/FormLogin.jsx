import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";

function FormLogin() {
    return (
        <form action="">
            <InputForm label='Email' name='email' type='email' placeholder='example@gmail.com' />
            <InputForm label='Password' name='password' type='password' placeholder='*********' />
            <Button variant='bg-blue-500 w-full' text='login'></Button>
        </form>
    );
}

export default FormLogin;