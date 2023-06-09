import image from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {

    const {createUser, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email);

        if(password.length < 6){
            toast("Password should be of atleast 6 character")
        }

        createUser(email, password) 
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            toast("Registration successful");
            updateUserProfile(result.user, name)
            logout();
            navigate('/login');
        })
        .then(error => {
            console.log(error);
        })
    }

    const updateUserProfile = (user, name) => {
        updateProfile(user, {
            displayName: name,
        })
        .then()
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
                        <h2 className='text-center text-[#444444] text-3xl font-bold'>Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <div className='space-y-7'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered rounded-md" required />
                                </div>
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

                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className='btn btn-success rounded-md' />
                                </div>


                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='text-center'>Already Have an Account? <Link to="/login" className='text-orange-600 font-bold'>Sign In</Link></p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;