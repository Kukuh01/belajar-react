import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

function RegisterPage() {
    return (
        <AuthLayout title='register' type="register">
            <FormRegister></FormRegister>
        </AuthLayout>
    );
}

export default RegisterPage;