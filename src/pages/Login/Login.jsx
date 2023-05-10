import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import image from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="hero">
            <div className="hero-content gap-16 flex-col-reverse lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md bg-base-100 rounded-none border">
                    <div className="card-body">
                        <form>
                            <h2 className='text-center text-[#444444] text-3xl font-bold'>Login</h2>
                            <div className='space-y-7'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered rounded-md" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered rounded-md" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign In" className='btn btn-success rounded-md' />
                                </div>
                                <p className="text-center">Or Sign In With</p>
                                <div className='flex justify-center items-center gap-3'>
                                <button className="btn btn-sm btn-circle  btn-outline"><FaFacebook></FaFacebook></button>
                                <button className="btn btn-sm btn-circle  btn-outline"><FaLinkedin></FaLinkedin></button>
                                <button className="btn btn-sm btn-circle  btn-outline"><FaGoogle></FaGoogle></button>
                                    
                                </div>
                                <p className='text-center'>Have an Account? <Link className='text-orange-600 font-bold'>Sign In</Link></p>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;