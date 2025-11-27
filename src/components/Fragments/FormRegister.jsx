import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";

function FormRegister() {
    return (
        <form action="">
            <InputForm label='Fullname' name='fullname' type='text' placeholder='insert your name' />
            <InputForm label='Email' name='email' type='email' placeholder='example@gmail.com' />
            <InputForm label='Password' name='password' type='password' placeholder='*********' />
            <InputForm label='Confirm Password' name='confirmPassword' type='password' placeholder='*********' />
            <Button variant='bg-green-500 w-full' text='register'></Button>
        </form>
    );
}

export default FormRegister;