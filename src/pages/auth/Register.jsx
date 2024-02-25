import { registerNewUser } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { route } from "../../routes";
import { useState } from "react";
import Loading from "../../assets/Loading";

const Register = () => {
    const { register, handleSubmit, reset } = useForm(); // custom hook by lib...

    const navigate = useNavigate();

    const password = 'password';
    const email = 'email';

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleLoginNow = () => {
        navigate(route.login); // go to login page
        setIsSuccess(false);
    }

    const handleRegisterSubmit = async (data) => {
        const { email, password } = data;

        try {
            setIsLoading(true)
            const newUser = await registerNewUser(email, password);

            if (newUser) {
                setIsLoading(false);
                setIsSuccess(true);

                // auto redirect after 5 second...
                setTimeout(() => {
                    navigate(route.login);
                    setIsSuccess(false);
                }, 5000)
            }
        } catch (error) {
            console.log(error);
        }

        reset(); // clear user input fields... after submit data...
    };

    return (
        <div className="authContainer">

            <p className="authTitle">Sign-up</p>

            <form
                className="authForm"
                onSubmit={handleSubmit(handleRegisterSubmit)}
            >
                {
                    isLoading &&
                    <div className="backdropLoading">
                        {/* <p>Please wait... </p> */}
                        <Loading />
                    </div>
                }

                <input
                    type={email}
                    name={email}
                    className="authInput"
                    placeholder="Enter Email"
                    {...register(email, { required: true })}
                />

                <input
                    type={password}
                    name={password}
                    className="authInput"
                    placeholder="Enter Password"
                    {...register(password, { required: true })}
                />

                <button type="submit" className="submitBtn">
                    Register
                </button>

                <p>Already have an account?
                    <span onClick={handleLoginNow} className="navLink">
                        Login Now
                    </span>
                </p>
            </form>

            {
                isSuccess &&
                <p className="text-green-400 font-semibold">Registration successful</p>
            }

        </div>
    )
}

export default Register