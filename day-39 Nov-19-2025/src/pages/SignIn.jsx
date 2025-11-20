import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import app from "../firebase";
import { getAuth } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

const SignIn = () => {
    const auth = getAuth(app);
    const [signInWithEmailAndPassword, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        if (!error){
            toast.success("Signed in successfully!");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
        reset();
    };

    return (
        <div className="w-max border rounded shadow p-4 mx-auto my-12">
            <ToastContainer />
            <h2 className="text-2xl font-semibold text-center">Sign In</h2>
            <form className="space-y-4 max-w-md mx-auto mt-4" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address"
                    }
                })} placeholder="Enter Email" className="px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded-md" />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                <input type="password" {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                    }
                })} placeholder="Enter Password" className="px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded-md" />
                {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}

                <button type="submit" className="mt-8! w-full px-4 py-2.5 mx-auto block text-[15px] font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">Submit</button>
            </form>
        </div>
    );
};

export default SignIn;