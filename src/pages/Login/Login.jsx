import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import image from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast("Logged In Successfully")
            form.reset();
            navigate('/')
        })
        .catch(error => {
            console.log(error);
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
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign In" className='btn btn-success rounded-md' />
                                </div>

                            </div>
                        </form>
                        <p className="text-center mt-2"><small>Or Sign In With</small></p>
                        <div className='flex justify-center items-center gap-3 my-3'>
                            <button className="btn btn-sm btn-circle  btn-outline"><FaFacebook></FaFacebook></button>
                            <button className="btn btn-sm btn-circle  btn-outline"><FaLinkedin></FaLinkedin></button>
                            <button className="btn btn-sm btn-circle  btn-outline"><FaGoogle></FaGoogle></button>

                        </div>
                        <p className='text-center'>New To This Website? <Link to="/register" className='text-orange-600 font-bold'>Sign Up</Link></p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;