import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    console.log('login page loction',location)
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        logIn(email, password)
        .then(result => {
            console.log(result.user)

            // navigte ajfer login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-2/3 lg:w-3/4 mx-auto">
                <h1 className="text-center text-3xl mt-5 font-semibold">please login...</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>Do not Have An Account ? <Link className="text-red-700 font-bold" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;