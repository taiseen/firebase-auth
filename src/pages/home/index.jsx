import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../firebase/auth";
import { route } from "../../routes";

const Home = () => {

    const navigate = useNavigate();

    const [user, loading] = useAuthState(firebaseAuth);

    const userEmail = user?.email;
    const userName = userEmail?.split('@')[0];
    const displayName = userName?.charAt(0)?.toUpperCase() + userName?.slice(1);

    const handelLogout = async () => {
        await logOut();
        navigate(route.login);
    }

    if (loading) return (
        <div className="h-screen grid place-items-center">
            <p className="text-4xl font-semibold">User info loading...</p>
        </div>
    )

    return (
        <div>
            <header className="flex justify-end items-center gap-4 p-4 bg-slate-200 backdrop-blur-md">
                <p className="font-semibold">{userEmail || 'unknown'}</p>

                <button
                    onClick={handelLogout}
                    className="px-3 py-2 bg-red-400 rounded hover:bg-red-500 duration-300"
                >
                    Logout
                </button>
            </header>

            <section className="flex items-center justify-center mt-52 text-5xl">
                Welcome {displayName || 'Unknown'}
            </section>
        </div>
    )
}

export default Home