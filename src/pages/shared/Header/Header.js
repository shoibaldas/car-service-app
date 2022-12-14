import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../context/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li className="font-semibold"><Link to='/'>Home</Link></li>
        <li className="font-semibold"><Link to='/'>About</Link></li>
        <li className="font-semibold"><Link to='/'>Services</Link></li>
        <li className="font-semibold"><Link to='/'>Blog</Link></li>
        <li className="font-semibold"><Link to='/'>Contact</Link></li>
    </>

    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className="navbar p-2 h-20 mb-8 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        <img className="w-9/12" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.uid ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    {
                                        user?.uid ?
                                            <img className='w-10 rounded-full' src={user?.photoURL} alt='' /> :
                                            <FaUserAlt className='bg-violet-800'></FaUserAlt>
                                    }
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a href='/' className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a href='/'>Settings</a></li>
                                    <li><Link onClick={handleLogOut}>Logout</Link></li>
                                </ul>
                            </div>
                        </>
                        :
                        <Link to='/login' className="outline outline-offset-2 outline-1 rounded px-4 py-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600 hover:text-gray-100 hover:outline-none ease-in duration-200">Appointment</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
