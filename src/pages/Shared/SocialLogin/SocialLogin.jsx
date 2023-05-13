import { useContext } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = ({from}) => {

    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            navigate(from)
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='flex justify-center items-center gap-3 my-3'>
                <Link><button className="btn btn-sm btn-circle  btn-outline"><FaFacebook></FaFacebook></button></Link>
                <button className="btn btn-sm btn-circle  btn-outline"><FaLinkedin></FaLinkedin></button>
               <button onClick={handleGoogle} className="btn btn-sm btn-circle  btn-outline"><FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;