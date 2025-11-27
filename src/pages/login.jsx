import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

function LoginPage() {
    return (
        <AuthLayout title='login' type="login">
            <FormLogin></FormLogin>
        </AuthLayout>
    );
}

export default LoginPage;