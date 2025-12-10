import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState("");

    const onSubmit = (data) => {
        setLoginError(""); // reset previous errors

        signIn(data.email, data.password)
            .then((result) => {
                console.log("Login Success:", result.user);
                navigate("/"); // ⬅️ SUCCESS → redirect home
            })
            .catch((error) => {
                console.log("Login Failed:", error.message);
                setLoginError("Invalid email or password."); // ⬅️ FAILURE → stay on page
            });
    };

    return (
        <div>
            <h1 className="text-3xl text-center mb-4">Sign In to Continue</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                        className="input input-bordered w-full"
                        placeholder="Email"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                    {/* Password */}
                    <label className="label mt-3">Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        className="input input-bordered w-full"
                        placeholder="Password"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                    {/* Login error from Firebase */}
                    {loginError && (
                        <p className="text-red-600 font-medium mt-2">{loginError}</p>
                    )}

                    <button className="btn bg-[#73863b] mt-4 text-white text-xl w-full">
                        Login
                    </button>
                </fieldset>

                <p className="text-center mt-2">
                    Are you new here?  
                    <Link className="text-blue-300 font-semibold" to="/register"> Sign Up</Link>
                </p>
            </form>

            <div className="mt-4">
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
