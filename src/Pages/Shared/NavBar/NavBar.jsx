import { Link } from "react-router-dom";
import webIcons from '../../../assets/web-img.jpg'

const NavBar = () => {
    const navOptions = <>
        <li className="font-bold text-[20px] hover:text-cyan-300"><Link>Home</Link></li>
        <li className="font-bold text-[20px] hover:text-cyan-300"><Link>Instructors</Link></li>
        <li className="font-bold text-[20px] hover:text-cyan-300"><Link>Classes</Link></li>
        <li className="font-bold text-[20px] hover:text-cyan-300"><Link>Dashboard</Link></li>
        <li className="font-bold text-[20px] hover:text-cyan-300"><Link to="/login">Login</Link></li>


      
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="w-[50px] rounded-lg" src={webIcons} alt="" />
                    <a className="btn btn-ghost normal-case font-bold text-[20px] hover:text-cyan-300">LearnPlayCamp</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;