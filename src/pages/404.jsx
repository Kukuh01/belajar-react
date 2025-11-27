import { useRouteError  } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-fit h-72 border-2 border-blue-600 p-2 flex-col justify-evenly">
                <h1 className="mb-5 text-blue-600">Oops!</h1>
                <p>Sorry, an unexpected error has occured</p>
                <p className="text-red-500">{error.statusText || error.message}</p>    
            </div>
        </div>
    );
}

export default ErrorPage;