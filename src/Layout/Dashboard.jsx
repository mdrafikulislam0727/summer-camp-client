import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    // TODO
    const isAdmin = true;
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
                        isAdmin ? <>
                            <li><NavLink className="font-bold" to="/">Admin Home</NavLink></li>
                            <li><NavLink className="font-bold" to="/dashboard/allclasses">Manage Classes</NavLink></li>
                            <li><NavLink className="font-bold" to="/dashboard/allusers">Manage Users</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink className="font-bold" to="/">Home</NavLink></li>
                        </> :

                            <>
                                <li><NavLink className="font-bold" to="/">Student Home</NavLink></li>
                                <li><NavLink className="font-bold" to="/dashboard/myenrolledclasses">My Enrolled Classes</NavLink></li>
                                <li><NavLink className="font-bold" to="/dashboard/myclasses">My Selected Classes</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink className="font-bold" to="/">Home</NavLink></li>
                            </>
                    }
                    {/* Sidebar content here */}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;