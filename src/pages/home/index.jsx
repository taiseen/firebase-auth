import { useNavigate } from "react-router-dom";
import { route } from "../../routes";

const Home = () => {

    const navigate = useNavigate();

    const handelLogout = () => {
        navigate(route.login);
    }

    return (
        <div>
            <header className="flex gap-4 bg-slate-200 p-4 justify-end items-center">
                <p className="font-semibold">use email</p>

                <button
                    onClick={handelLogout}
                    className="px-3 py-2 bg-red-400 rounded hover:bg-red-500 duration-300"
                >
                    Logout
                </button>
            </header>

            <section className="flex items-center justify-center mt-52 text-5xl">
                Welcome user
            </section>
        </div>
    )
}

export default Home