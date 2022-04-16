import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/outline'
import logo from '../../assests/images/logo2.png'
const Nav = () => {
    return (
       <div className="bg-white shadow-md ">
            <div className="w-10/12 mx-auto py-4 ">
            <nav className="flex justify-between">
                <div className="img w-32">
                    <img src={logo} alt="" />
                </div>
                <div className="item">
                    <ul className="flex gap-x-4 ">
                        <li><ShoppingCartIcon className="h-6"></ShoppingCartIcon></li>
                        <li>
                            <Link to={'login'}>Login</Link>
                        </li>
                        <li className="">
                            <Link className="px-4 py-2 bg-rose-500 font-semibold text-white rounded-lg" to={'register'}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
       </div>
    );
};

export default Nav;