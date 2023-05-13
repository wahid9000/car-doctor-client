import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';
const NavBar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {

        Swal.fire({
            title: 'Log Out?',
            text: "You will be redirected to the Login Page!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log Out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => { 
                        localStorage.removeItem("car-doctor-access-token");
                     })
                    .catch(error => console.log(error))
                Swal.fire(
                    'Logged Out!',
                    'You have Logged Out Successfully.',
                    'success'
                )
                navigate('/login')

            }
        })
    }

    return (
        <div className="navbar h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>Services</Link></li>
                        {
                            user &&
                            <li><Link to="/bookings">Bookings</Link></li>
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li><Link>Services</Link></li>
                    {
                        user &&
                        <li><Link to="/bookings">Bookings</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                {user?.email ?
                    <Link onClick={handleLogout} className="btn btn-warning rounded-md">Logout</Link>
                    :
                    <Link to='/login' className="btn btn-warning text-white bg-orange-600 rounded-md">Login</Link>
                }

                <Link to="/" className="btn btn-outline btn-warning m-3 text-orange-900 rounded-md">Appointment</Link>
            </div>
        </div>
    );
};

export default NavBar;