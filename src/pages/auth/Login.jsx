import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../assets/Loading";
import { loginUser, signInWithGoogle } from "../../firebase/auth";
import { route } from "../../routes";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // custom hook by lib...

    const navigate = useNavigate();

    const password = 'password';
    const email = 'email';

    const [isLoading, setIsLoading] = useState(false);

    // signInWithGoogle
    const handleToastInfo = () => {
        if (errors[email]) return toast.error(errors[email].message);
        if (errors[password]) return toast.error(errors[password].message);
    }

    const handleSocialLogin = async (provider) => {
        if (provider === 'google') {
            await signInWithGoogle();
            navigate(route.home); // redirect user to home page
        }
    }

    const handleUserLogin = async (data) => {
        const { email, password } = data;

        try {
            setIsLoading(true);
            const response = await loginUser(email, password);

            if (response?.user) {
                navigate(route.home); // redirect user to home page
                reset(); // clear user input fields... after submit data...
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="authContainer">

            <p className="authTitle">Sign-in</p>

            <form
                className="authForm"
                onSubmit={handleSubmit(handleUserLogin)}
            >

                {
                    isLoading &&
                    <div className="backdropLoading">
                        <Loading />
                    </div>
                }

                <input
                    type={email}
                    name={email}
                    className="authInput"
                    placeholder="Enter Email"
                    {...register(email, { required: 'Email Required...' })}
                />

                <input
                    type={password}
                    name={password}
                    className="authInput"
                    placeholder="Enter Password"
                    {...register(password, { required: 'Password Required...' })}
                />

                <button type="submit" className="submitBtn" onClick={handleToastInfo}>
                    Login
                </button>

                <button type="button" className="submitBtn" onClick={() => handleSocialLogin('google')}>
                    Login with Google
                </button>

                <div className="text-center flex flex-col gap-1 mt-1.5">
                    <p>For new account please
                        <Link to={route.register} className="navLink">
                            Register
                        </Link>
                    </p>

                    <p>Forgat password?
                        <Link to={route.resetPassword} className="navLink">
                            Reset
                        </Link>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default Login