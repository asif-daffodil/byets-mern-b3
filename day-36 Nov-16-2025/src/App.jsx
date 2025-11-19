import { useForm } from "react-hook-form";

const App = () => {
  const {register, handleSubmit, formState: { errors }, reset, watch} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
        <div className="text-center mb-12 sm:mb-16">
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-44 inline-block" />
          </a>
          <h4 className="text-slate-600 text-base mt-6">Sign up into your account</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-sm rounded-lg p-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">First Name</label>
              <input {...register("fname", {
                required: {
                  value: true,
                  message: "First name is required"
                },
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters"
                },
                pattern: {
                  value: /^[A-Za-z\s.-]+$/i,
                  message: "Invalid first name"
                }
              })} type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
              {errors.fname && <span className="text-sm text-red-500">{errors.fname.message}</span>}
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Last Name</label>
              <input {...register("lname", {
                required: {
                  value: true,
                  message: "Last name is required"
                },
                pattern: {
                  value: /^[A-Za-z\s.-]+$/i,
                  message: "Invalid last name"
                }
              })} type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" />
              {errors.lname && <span className="text-sm text-red-500">{errors.lname.message}</span>}
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
              <input {...register("email", {
                required: {
                  value: true,
                  message: "Email is required"
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address"
                }
              })} type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Mobile No.</label>
              <input {...register("number", {
                required: {
                  value: true,
                  message: "Mobile number is required"
                },
                pattern: {
                  value: /^[0-9]{10,}$/,
                  message: "Invalid mobile number"
                }
              })} type="number" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
              {errors.number && <span className="text-sm text-red-500">{errors.number.message}</span>}
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
              <input {...register("password", {
                required: {
                  value: true,
                  message: "Password is required"
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: "Password must be at least 8 characters long and include at least one letter, one number, and one special character"
                }
              })} type="password" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
              <input {...register("cpassword", {
                required: {
                  value: true,
                  message: "Confirm password is required"
                },
                validate: value =>
                  value === watch('password') || "Passwords do not match"
              })} type="password" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
              {errors.cpassword && <span className="text-sm text-red-500">{errors.cpassword.message}</span>}
            </div>
          </div>
          <div className="mt-12">
            <button type="submit" className="mx-auto block min-w-32 py-3 px-6 text-sm font-medium tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
              Sign up
            </button>
          </div>
        </form>
    </div>
  );
};

export default App;