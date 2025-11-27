import { Link } from "react-router-dom";

function AuthLayout(props) {

    const { children , title, type} = props;

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
                <p className='font-medium text-slate-500 mb-8'>
                    Welcome, Please enter your details
                </p>
                {children}
                {/* Cara 1 conditional rendering */}
                {/* <p className="text-sm mt-5 text-center">


                     {type === "login" ? "Don't have an account? " : "Already have an account? "}

                    {type === "login" &&(
                        <Link to={"/register"} className="text-blue-600 underline font-bold">Sign up</Link>
                    )}

                    {type === "register" &&(
                        <Link to={"/login"} className="text-blue-600 underline font-bold">Login</Link>
                    )} 

                </p> */}
                <Navigation type={type}/>
            </div>
        </div>
    );
}

// Cara 2 conditional rendering
function Navigation({type}) {
    if(type === "login"){
        return (
            <p className="text-sm mt-5 text-center">
                Don't have an account?{" "}
                <Link to={"/register"} className="text-blue-600 underline font-bold">Sign up</Link>
            </p>
        );
    }
    if(type === "register"){
        return (
            <p className="text-sm mt-5 text-center">
                Don't have an account?{" "}
                <Link to={"/login"} className="text-blue-600 underline font-bold">Login</Link>
            </p>
        )
    }
}

export default AuthLayout;