import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { firebaseAuth } from "../firebase/config";
import { route } from ".";

const AnonymousRoute = () => {
    const [user, loading] = useAuthState(firebaseAuth);

    if (loading) return (
        <div className="h-screen grid place-items-center">
            <p className="text-4xl font-semibold">User info loading...</p>
        </div>
    )

    return !user
        ? <Outlet />
        : <Navigate to={route.root} />
}

export default AnonymousRoute