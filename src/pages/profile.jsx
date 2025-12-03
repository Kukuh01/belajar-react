import { useLogin } from "../hooks/useLogin";

export function ProfilePage() {

    const username = useLogin();

    return(
        <div>
            <h1>Profile</h1>
            Username: {username}
        </div>
    );
}