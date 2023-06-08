import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Login = () => {
  const { signIn } = useContext(AuthContext)
  const navigate =useNavigate()
  const location =useLocation()

  const from = location.state?.from?.pathname || "/"

  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Your Login Successful',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, {replace: true});
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>

        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body py-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p>New here? <Link to="/signup" className="text-orange-400 font-bold pb-4">Create a New Account</Link></p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );

};

export default Login;