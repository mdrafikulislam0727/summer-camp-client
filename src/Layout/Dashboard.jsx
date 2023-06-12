import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    // TODO
    // const isAdmin = true;

    const [isAdmin] = useAdmin()

    const [isInstructor] = useInstructor()

    console.log({isAdmin, isInstructor})
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-sky-700">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">

                    {
                        isAdmin ? (<div> <li><NavLink className="font-bold text-lime-400" to="/">Admin Home</NavLink></li>
                        <li><NavLink className="font-bold" to="/dashboard/manageclasses">Manage Classes</NavLink></li>
                        <li><NavLink className="font-bold" to="/dashboard/allusers">Manage Users</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink className="font-bold" to="/">Home</NavLink></li></div>)
                        : isInstructor ? (
                           <div>
                             <li><NavLink className="font-bold text-lime-400" to="/">Instructor Home</NavLink></li>
                             <li><NavLink className="font-bold" to="/dashboard/addclasses">Add a Class</NavLink></li>
                             <li><NavLink className="font-bold" to="/dashboard/instructorclasses">My Classes</NavLink></li>
                           </div>
                            
                        ) 

                        :
                         (<div> <li><NavLink className="font-bold text-lime-400" to="/">Student Home</NavLink></li>
                                <li><NavLink className="font-bold" to="/dashboard/myenrolledclasses">My Enrolled Classes</NavLink></li>
                                <li><NavLink className="font-bold" to="/dashboard/myclasses">My Selected Classes</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink className="font-bold" to="/">Home</NavLink></li></div>)
                    }


                    <div>

                    </div>

                    {/* Sidebar content here */}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;