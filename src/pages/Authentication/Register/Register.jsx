import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { createUser } = useAuth();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-3xl text-center mb-4">Create an Account</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">

                    {/* Name */}
                    <label className="label">Name</label>
                    <input
                        {...register("name")}
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Name"
                    />

                    {/* Email */}
                    <label className="label mt-3">Email</label>
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
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}

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
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                message:
                                    "Must include uppercase, lowercase, number, and special character",
                            },
                        })}
                        className="input input-bordered w-full"
                        placeholder="Password"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password.message}
                        </p>
                    )}

                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>

                    <button className="btn bg-[#73863b] text-white w-full text-xl mt-4">
                        Register
                    </button>
                </fieldset>

                <p className="text-center mt-2">
                    Already have an account?{" "}
                    <Link className="text-blue-300 font-semibold" to="/login">
                        Login
                    </Link>
                </p>


            </form>
            {/* Social Login */}
            <div className="mt-4">
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;
