
import image from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { useScrollTop } from '../../hooks/useScrollTop';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const Login = () => {

    const { pathName } = useLocation();
    useScrollTop(pathName);

    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast("Logged In Successfully")
                form.reset();
                navigate(from, { replace: true })
                
            })
            .catch(error => {
                console.log(error);
                toast("Invalid Email or Password")
            })
    }




    return (
        <div className="hero">
            <div className="hero-content gap-16 flex-col-reverse lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md bg-base-100 rounded-none border">
                    <div className="card-body">
                        <h2 className='text-center text-[#444444] text-3xl font-bold'>Login</h2>
                        <form onSubmit={handleLogin}>

                            <div className='space-y-7'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered rounded-md" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered rounded-md" required />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign In" className='btn btn-success rounded-md' />
                                </div>

                            </div>
                        </form>
                        <SocialLogin from={from}></SocialLogin>
                        <p className='text-center'>New To This Website? <Link to="/register" className='text-orange-600 font-bold'>Sign Up</Link></p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;