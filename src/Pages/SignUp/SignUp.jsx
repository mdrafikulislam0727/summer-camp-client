import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser,updateUserProfile}=useContext(AuthContext)
  const navigate =useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(()=>{
        reset()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/')
      })
      .catch(error =>console.log(error))
    })
  };

  https://codesandbox.io/s/react-hook-form-password-match-check-standard-validation-eo6en?file=/src/index.js:933-941

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now</h1>

        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 mt-20">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-10">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} name="name" placeholder="Your name" className="input input-bordered" />
              {errors.name && <span className="text-red-500">Name is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
              {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
              })} name="password" placeholder="password" className="input input-bordered" />

              {errors.password?.type === 'minLength' && <p className="text-red-600">password must be 6 characters</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-600">password must be lessThen 20 characters</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600">password must have one upper case one lower case, one number and one spacial character</p>}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
            <p>Alreday registered ?<Link to="/login" className="text-orange-400 font-bold pb-4">Go to login</Link></p>
          </form>
            <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;